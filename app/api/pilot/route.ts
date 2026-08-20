import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

type PilotRequest = {
  name?: string;
  title?: string;
  company?: string;
  industry?: string;
  email?: string;
  assetScope?: string;
  systemOfRecord?: string;
  primaryPain?: string;
  message?: string;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PilotRequest;

    const name = clean(body.name, 160);
    const email = clean(body.email, 254).toLowerCase();
    const company = clean(body.company, 180);
    const role = clean(body.title, 120);
    const industry = clean(body.industry, 120);
    const assetScope = clean(body.assetScope, 240);
    const systemOfRecord = clean(body.systemOfRecord, 140);
    const primaryPain = clean(body.primaryPain, 240);
    const notes = clean(body.message, 3000);

    if (name.length < 2 || company.length < 2 || assetScope.length < 2 || primaryPain.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please complete the required pilot fields.' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid work email.' },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Pilot intake is not configured: Supabase environment variables are missing.');
      return NextResponse.json(
        { success: false, error: 'Pilot intake is temporarily unavailable. Please try again later.' },
        { status: 503 },
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: intakeId, error: intakeError } = await supabase.rpc('submit_pilot_intake_request', {
      request: {
        name,
        email,
        company,
        role,
        industry,
        asset_scope: assetScope,
        system_of_record: systemOfRecord,
        history_available: '',
        primary_pain: primaryPain,
        data_readiness: 'To be confirmed during discovery',
        security_need: 'To be confirmed during discovery',
        commercial_model: 'Strategic pilot',
        notes,
        source_path: '/strategic-pilot',
      },
    });

    if (intakeError || !intakeId) {
      console.error('Pilot intake persistence failed:', intakeError);
      return NextResponse.json(
        { success: false, error: 'We could not record your request. Please try again.' },
        { status: 500 },
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const internalRecipient = process.env.PILOT_INTAKE_EMAIL || 'info@syncai.ca';

    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'SyncAI <reports@syncai.ca>',
          to: internalRecipient,
          replyTo: email,
          subject: `New SyncAI pilot request — ${company}`,
          text: [
            `Pilot intake ID: ${intakeId}`,
            `Name: ${name}`,
            `Role: ${role || 'Not provided'}`,
            `Company: ${company}`,
            `Industry: ${industry || 'Not provided'}`,
            `Email: ${email}`,
            `Asset / system scope: ${assetScope}`,
            `System of record: ${systemOfRecord || 'Not provided'}`,
            `Primary problem: ${primaryPain}`,
            `Additional context: ${notes || 'None'}`,
          ].join('\n'),
        });
      } catch (emailError) {
        console.error('Pilot intake notification failed:', emailError);
      }
    }

    return NextResponse.json({ success: true, intakeId });
  } catch (error) {
    console.error('Pilot intake API error:', error);
    return NextResponse.json(
      { success: false, error: 'We could not process your request. Please try again.' },
      { status: 500 },
    );
  }
}
