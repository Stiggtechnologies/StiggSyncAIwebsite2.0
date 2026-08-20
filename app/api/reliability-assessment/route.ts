import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

type AssessmentRequest = {
  name?: string;
  email?: string;
  company?: string;
  title?: string;
  industry?: string;
  assetScope?: string;
  systemOfRecord?: string;
  primaryPain?: string;
  message?: string;
  attribution?: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    referrer?: string;
  };
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AssessmentRequest;
    const name = clean(body.name, 160);
    const email = clean(body.email, 254).toLowerCase();
    const company = clean(body.company, 180);
    const role = clean(body.title, 120);
    const industry = clean(body.industry, 120);
    const assetScope = clean(body.assetScope, 240);
    const systemOfRecord = clean(body.systemOfRecord, 140);
    const primaryPain = clean(body.primaryPain, 500);
    const additionalNotes = clean(body.message, 2500);

    if (name.length < 2 || company.length < 2 || assetScope.length < 2 || primaryPain.length < 5) {
      return NextResponse.json({ success: false, error: 'Please complete the required assessment fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid work email.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('RIA intake is not configured: Supabase environment variables are missing.');
      return NextResponse.json({ success: false, error: 'Assessment intake is temporarily unavailable. Please try again later.' }, { status: 503 });
    }

    const attribution = body.attribution || {};
    const attributionLines = [
      `UTM source: ${clean(attribution.utmSource, 160) || 'Not provided'}`,
      `UTM medium: ${clean(attribution.utmMedium, 160) || 'Not provided'}`,
      `UTM campaign: ${clean(attribution.utmCampaign, 200) || 'Not provided'}`,
      `UTM content: ${clean(attribution.utmContent, 200) || 'Not provided'}`,
      `Referrer: ${clean(attribution.referrer, 500) || 'Not provided'}`,
    ];
    const notes = ['Reliability Intelligence Assessment - Standard inquiry', ...attributionLines, '', `Additional context: ${additionalNotes || 'None'}`].join('\n');

    const supabase = createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: intakeId, error: intakeError } = await supabase.rpc('submit_pilot_intake_request', {
      request: {
        name,
        email,
        company,
        role,
        industry,
        asset_scope: assetScope,
        system_of_record: systemOfRecord,
        history_available: 'To be confirmed during assessment scoping',
        primary_pain: primaryPain,
        data_readiness: 'To be confirmed during assessment scoping',
        security_need: 'Governed data-transfer method to be agreed after scope confirmation',
        commercial_model: 'Reliability Intelligence Assessment - Standard - US$35,000',
        notes,
        source_path: '/reliability-assessment',
      },
    });

    if (intakeError || !intakeId) {
      console.error('RIA intake persistence failed:', intakeError);
      return NextResponse.json({ success: false, error: 'We could not record your assessment request. Please try again.' }, { status: 500 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const internalRecipient = process.env.RIA_INTAKE_EMAIL || process.env.PILOT_INTAKE_EMAIL || 'info@syncai.ca';
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'SyncAI <reports@syncai.ca>',
          to: internalRecipient,
          replyTo: email,
          subject: `New US$35K Reliability Intelligence Assessment inquiry - ${company}`,
          text: [
            `Intake ID: ${intakeId}`,
            `Name: ${name}`,
            `Role: ${role || 'Not provided'}`,
            `Company: ${company}`,
            `Industry: ${industry || 'Not provided'}`,
            `Email: ${email}`,
            `Asset / operating scope: ${assetScope}`,
            `System of record: ${systemOfRecord || 'Not provided'}`,
            `Reliability question: ${primaryPain}`,
            `Additional context: ${additionalNotes || 'None'}`,
            '',
            ...attributionLines,
          ].join('\n'),
        });
      } catch (emailError) {
        console.error('RIA intake notification failed:', emailError);
      }
    }

    return NextResponse.json({ success: true, intakeId });
  } catch (error) {
    console.error('RIA intake API error:', error);
    return NextResponse.json({ success: false, error: 'We could not process your assessment request. Please try again.' }, { status: 500 });
  }
}
