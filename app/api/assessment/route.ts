import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { generateReportHTML } from '@/lib/pdf-report';
import { AssessmentData, ScoreResult, ROIResult } from '@/lib/assessment-types';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { assessment, score, roi, leadPriority } = body as {
      assessment: AssessmentData;
      score: ScoreResult;
      roi: ROIResult;
      leadPriority: string;
    };

    const { error: dbError } = await supabase.from('ai_readiness_submissions').insert({
      name: assessment.name,
      title: assessment.title,
      company: assessment.company,
      email: assessment.email,
      industry: assessment.industry,
      asset_count: assessment.assetCount,
      cmms_type: assessment.cmmsType,
      reactive_work_percent: assessment.reactiveWorkPercent,
      annual_maintenance_labor_cost: assessment.annualMaintenanceLaborCost,
      spare_parts_inventory_value: assessment.sparePartsInventoryValue,
      hourly_downtime_cost: assessment.hourlyDowntimeCost,
      annual_unplanned_downtime_hours: assessment.annualUnplannedDowntimeHours,
      audit_frequency: assessment.auditFrequency,
      audit_difficulty: assessment.auditDifficulty,
      ai_adoption_level: assessment.aiAdoptionLevel,
      readiness_score: score.totalScore,
      roi_low: roi.totalLow,
      roi_high: roi.totalHigh,
      lead_priority: leadPriority,
    });

    if (dbError) {
      console.error('Database error:', dbError);
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
