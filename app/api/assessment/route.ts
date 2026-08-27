import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { generateReportHTML } from '@/lib/pdf-report';
import { AssessmentData, ScoreResult, ROIResult } from '@/lib/assessment-types';

// Lazy-initialise so build-time static analysis doesn't throw when env vars are absent
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { assessment, score, roi, leadPriority } = body as {
      assessment: AssessmentData;
      score: ScoreResult;
      roi: ROIResult;
      leadPriority: string;
    };

    const supabase = getSupabase();

    // Single intake pipeline: every public form lands in pilot_intake_requests
    // via the governed submit_pilot_intake_request RPC (SLA timestamps + owner
    // notification are handled in the database). The legacy
    // ai_readiness_submissions table existed only on the retired Supabase
    // project (tjqffshetwd…) and is not part of the hardened project (U0).
    const painLine = [
      assessment.reactiveWorkPercent
        ? `Reactive work share: ${assessment.reactiveWorkPercent}%`
        : '',
      assessment.annualUnplannedDowntimeHours
        ? `Unplanned downtime: ${assessment.annualUnplannedDowntimeHours} h/yr`
        : '',
      roi?.totalLow
        ? `Modeled ROI: $${Number(roi.totalLow).toLocaleString()}–$${Number(roi.totalHigh ?? roi.totalLow).toLocaleString()}`
        : '',
    ]
      .filter(Boolean)
      .join(' · ');

    const notes = [
      `AI Readiness assessment — score: ${score?.totalScore ?? 'n/a'}`,
      `ROI range: $${roi?.totalLow ?? '—'}–$${roi?.totalHigh ?? '—'}`,
      `Lead priority: ${leadPriority ?? '—'}`,
      `Audit cadence: ${assessment.auditFrequency ?? '—'} / difficulty: ${assessment.auditDifficulty ?? '—'}`,
    ].join('\n');

    const { data: intakeId, error: dbError } = await supabase.rpc(
      'submit_pilot_intake_request',
      {
        request: {
          name: assessment.name,
          email: assessment.email,
          company: assessment.company,
          role: assessment.title,
          industry: assessment.industry,
          asset_scope: assessment.assetCount
            ? `~${assessment.assetCount} assets (AI Readiness)`
            : '',
          system_of_record: assessment.cmmsType,
          history_available: '',
          primary_pain: painLine || 'AI Readiness assessment lead',
          data_readiness: assessment.aiAdoptionLevel ?? '',
          security_need: 'To be confirmed during discovery',
          commercial_model: 'AI Readiness Assessment lead',
          notes,
          source_path: '/ai-readiness',
        },
      },
    );

    if (dbError || !intakeId) {
      console.error('AI Readiness intake persistence failed:', dbError);
      return NextResponse.json({ success: false, error: 'Failed to save submission' }, { status: 500 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);

      const reportHTML = generateReportHTML({
        assessment,
        score,
        roi,
        generatedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });

      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'SyncAI <reports@syncai.ca>',
          to: assessment.email,
          subject: `Your AI Readiness Assessment Report - ${assessment.company}`,
          html: reportHTML,
        });
      } catch (emailError) {
        console.error('Email error:', emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
