'use client';

import { useState, useEffect } from 'react';
import ProgressIndicator from './ProgressIndicator';
import StepContainer from './StepContainer';
import ResultsDisplay from './ResultsDisplay';
import FormField, {
  SelectField,
  SliderField,
  CurrencyInput,
  NumberInput,
  TextInput,
} from './FormField';
import {
  AssessmentData,
  ScoreResult,
  ROIResult,
  INDUSTRIES,
  ASSET_COUNTS,
  CMMS_TYPES,
  AUDIT_FREQUENCIES,
  AUDIT_DIFFICULTIES,
  AI_ADOPTION_LEVELS,
} from '@/lib/assessment-types';
import { calculateScore, calculateROI, getLeadPriority } from '@/lib/assessment-scoring';
import { trackEvent, ASSESSMENT_EVENTS, initPostHog } from '@/lib/posthog';

const STEPS = [
  'Organization',
  'Operations',
  'Downtime',
  'Governance',
  'AI Maturity',
  'Contact',
];

const initialData: AssessmentData = {
  industry: '',
  assetCount: '',
  cmmsType: '',
  reactiveWorkPercent: 30,
  annualMaintenanceLaborCost: 0,
  sparePartsInventoryValue: 0,
  hourlyDowntimeCost: 0,
  annualUnplannedDowntimeHours: 0,
  auditFrequency: '',
  auditDifficulty: '',
  aiAdoptionLevel: '',
  name: '',
  title: '',
  company: '',
  email: '',
};

export default function AssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<AssessmentData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<{ score: ScoreResult; roi: ROIResult } | null>(null);

  useEffect(() => {
    initPostHog();
    trackEvent(ASSESSMENT_EVENTS.STARTED);

    const handleBeforeUnload = () => {
      if (!isComplete && currentStep > 0) {
        trackEvent(ASSESSMENT_EVENTS.STEP_ABANDONED, {
          step_number: currentStep,
          step_name: STEPS[currentStep],
          industry: data.industry || 'not_selected',
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentStep, isComplete, data.industry]);

  const updateData = <K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 0:
        return Boolean(data.industry && data.assetCount && data.cmmsType);
      case 1:
        return (
          data.reactiveWorkPercent >= 0 &&
          data.annualMaintenanceLaborCost > 0 &&
          data.sparePartsInventoryValue > 0
        );
      case 2:
        return data.hourlyDowntimeCost > 0 && data.annualUnplannedDowntimeHours > 0;
      case 3:
        return Boolean(data.auditFrequency && data.auditDifficulty);
      case 4:
        return Boolean(data.aiAdoptionLevel);
      case 5:
        return Boolean(data.name && data.title && data.company && data.email && data.email.includes('@'));
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep < STEPS.length - 1) {
      trackEvent(ASSESSMENT_EVENTS.STEP_COMPLETED, {
        step_number: currentStep,
        step_name: STEPS[currentStep],
        industry: data.industry || 'not_selected',
      });
      setCurrentStep((prev) => prev + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const score = calculateScore(data);
    const roi = calculateROI(data);
    const leadPriority = getLeadPriority(score.totalScore, roi.totalLow);

    trackEvent(ASSESSMENT_EVENTS.ROI_CALCULATED, {
      industry: data.industry,
      readiness_score: score.totalScore,
      roi_low: roi.totalLow,
      roi_high: roi.totalHigh,
    });

    if (leadPriority === 'High Priority Enterprise Lead') {
      trackEvent(ASSESSMENT_EVENTS.HIGH_PRIORITY_LEAD, {
        industry: data.industry,
        readiness_score: score.totalScore,
        roi_low: roi.totalLow,
        roi_high: roi.totalHigh,
      });
    }

    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assessment: data, score, roi, leadPriority }),
      });

      trackEvent(ASSESSMENT_EVENTS.COMPLETED, {
        industry: data.industry,
        readiness_score: score.totalScore,
        roi_low: roi.totalLow,
        roi_high: roi.totalHigh,
      });
    } catch (error) {
      console.error('Submission error:', error);
    }

    setResults({ score, roi });
    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete && results) {
    return <ResultsDisplay assessment={data} score={results.score} roi={results.roi} />;
  }

  return (
    <div className="py-12">
      <ProgressIndicator steps={STEPS} currentStep={currentStep} />

      {currentStep === 0 && (
        <StepContainer
          title="Organization Profile"
          description="Tell us about your organization to help us understand your operational context."
          onNext={handleNext}
          isFirstStep
          canProceed={canProceed()}
        >
          <FormField label="Industry">
            <SelectField
              value={data.industry}
              onChange={(v) => updateData('industry', v)}
              options={INDUSTRIES}
              placeholder="Select your industry"
            />
          </FormField>
          <FormField label="Total Asset Count" description="Number of physical assets under management">
            <SelectField
              value={data.assetCount}
              onChange={(v) => updateData('assetCount', v)}
              options={ASSET_COUNTS}
              placeholder="Select asset count range"
            />
          </FormField>
          <FormField label="CMMS / EAM System">
            <SelectField
              value={data.cmmsType}
              onChange={(v) => updateData('cmmsType', v)}
              options={CMMS_TYPES}
              placeholder="Select your system"
            />
          </FormField>
        </StepContainer>
      )}

      {currentStep === 1 && (
        <StepContainer
          title="Operational Profile"
          description="Help us understand your current maintenance operations and costs."
          onNext={handleNext}
          onBack={handleBack}
          canProceed={canProceed()}
        >
          <FormField
            label="Reactive Work Percentage"
            description="What percentage of your maintenance work is reactive (unplanned)?"
          >
            <SliderField
              value={data.reactiveWorkPercent}
              onChange={(v) => updateData('reactiveWorkPercent', v)}
              min={0}
              max={100}
              step={5}
              suffix="%"
            />
          </FormField>
          <FormField
            label="Annual Maintenance Labor Cost"
            description="Total annual spend on maintenance labor (internal + contractors)"
          >
            <CurrencyInput
              value={data.annualMaintenanceLaborCost}
              onChange={(v) => updateData('annualMaintenanceLaborCost', v)}
              placeholder="10,000,000"
            />
          </FormField>
          <FormField
            label="Spare Parts Inventory Value"
            description="Current value of spare parts and MRO inventory"
          >
            <CurrencyInput
              value={data.sparePartsInventoryValue}
              onChange={(v) => updateData('sparePartsInventoryValue', v)}
              placeholder="5,000,000"
            />
          </FormField>
        </StepContainer>
      )}

      {currentStep === 2 && (
        <StepContainer
          title="Downtime Exposure"
          description="Quantify the cost impact of unplanned downtime on your operations."
          onNext={handleNext}
          onBack={handleBack}
          canProceed={canProceed()}
        >
          <FormField
            label="Hourly Downtime Cost"
            description="Average cost per hour when critical equipment is down"
          >
            <CurrencyInput
              value={data.hourlyDowntimeCost}
              onChange={(v) => updateData('hourlyDowntimeCost', v)}
              placeholder="50,000"
            />
          </FormField>
          <FormField
            label="Annual Unplanned Downtime Hours"
            description="Total hours of unplanned equipment downtime per year"
          >
            <NumberInput
              value={data.annualUnplannedDowntimeHours}
              onChange={(v) => updateData('annualUnplannedDowntimeHours', v)}
              placeholder="500"
              suffix="hours"
            />
          </FormField>
        </StepContainer>
      )}

      {currentStep === 3 && (
        <StepContainer
          title="Governance & Compliance"
          description="Help us understand your regulatory and audit environment."
          onNext={handleNext}
          onBack={handleBack}
          canProceed={canProceed()}
        >
          <FormField
            label="Audit Frequency"
            description="How often do you undergo maintenance-related audits?"
          >
            <SelectField
              value={data.auditFrequency}
              onChange={(v) => updateData('auditFrequency', v)}
              options={AUDIT_FREQUENCIES}
              placeholder="Select audit frequency"
            />
          </FormField>
          <FormField
            label="Audit Difficulty"
            description="How challenging is it to prepare for and pass audits?"
          >
            <SelectField
              value={data.auditDifficulty}
              onChange={(v) => updateData('auditDifficulty', v)}
              options={AUDIT_DIFFICULTIES}
              placeholder="Select difficulty level"
            />
          </FormField>
        </StepContainer>
      )}

      {currentStep === 4 && (
        <StepContainer
          title="AI Maturity"
          description="What is your organization's current level of AI adoption?"
          onNext={handleNext}
          onBack={handleBack}
          canProceed={canProceed()}
        >
          <FormField
            label="Current AI Adoption Level"
            description="Where is your organization on the AI adoption journey?"
          >
            <SelectField
              value={data.aiAdoptionLevel}
              onChange={(v) => updateData('aiAdoptionLevel', v)}
              options={AI_ADOPTION_LEVELS}
              placeholder="Select AI adoption level"
            />
          </FormField>
        </StepContainer>
      )}

      {currentStep === 5 && (
        <StepContainer
          title="Get Your Results"
          description="Enter your details to receive your personalized AI Readiness Report."
          onNext={handleNext}
          onBack={handleBack}
          isLastStep
          isSubmitting={isSubmitting}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Full Name">
              <TextInput
                value={data.name}
                onChange={(v) => updateData('name', v)}
                placeholder="John Smith"
              />
            </FormField>
            <FormField label="Job Title">
              <TextInput
                value={data.title}
                onChange={(v) => updateData('title', v)}
                placeholder="VP of Operations"
              />
            </FormField>
          </div>
          <FormField label="Company">
            <TextInput
              value={data.company}
              onChange={(v) => updateData('company', v)}
              placeholder="Acme Manufacturing"
            />
          </FormField>
          <FormField label="Work Email">
            <TextInput
              value={data.email}
              onChange={(v) => updateData('email', v)}
              placeholder="john@acme.com"
              type="email"
            />
          </FormField>
          <p className="text-xs text-gray-500 mt-4">
            By submitting, you agree to receive your AI Readiness Report and occasional updates from SyncAI.
            We respect your privacy and will never share your information.
          </p>
        </StepContainer>
      )}
    </div>
  );
}
