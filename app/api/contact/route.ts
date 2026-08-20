import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactRequest = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = clean(body.name, 160);
    const email = clean(body.email, 254).toLowerCase();
    const company = clean(body.company, 180);
    const message = clean(body.message, 5000);

    if (name.length < 2 || company.length < 2 || message.length < 5) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid work email.' },
        { status: 400 },
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error('Contact form is not configured: RESEND_API_KEY is missing.');
      return NextResponse.json(
        { success: false, error: 'Contact delivery is temporarily unavailable. Please try again later.' },
        { status: 503 },
      );
    }

    const resend = new Resend(resendKey);
    const recipient = process.env.CONTACT_EMAIL || 'info@syncai.ca';

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'SyncAI <reports@syncai.ca>',
      to: recipient,
      replyTo: email,
      subject: `SyncAI website inquiry — ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Contact delivery failed:', error);
      return NextResponse.json(
        { success: false, error: 'We could not deliver your message. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'We could not process your message. Please try again.' },
      { status: 500 },
    );
  }
}
