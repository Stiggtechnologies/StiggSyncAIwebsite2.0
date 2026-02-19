'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Clock, DollarSign, ArrowRight, Download, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ScoreResult, ROIResult, AssessmentData } from '@/lib/assessment-types';
import { formatFullCurrency } from '@/lib/assessment-scoring';

interface ResultsDisplayProps {
  assessment: AssessmentData;
  score: ScoreResult;
  roi: ROIResult;
}

export default function ResultsDisplay({ assessment, score, roi }: ResultsDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 81) return 'text-[#10B981]';
    if (score >= 61) return 'text-[#3B82F6]';
    if (score >= 36) return 'text-[#F59E0B]';
    return 'text-gray-400';
  };

  const getClassificationBg = (classification: string) => {
    if (classification === 'Strategic Priority Deployment') return 'from-[#10B981]/20 to-transparent border-[#10B981]/30';
    if (classification === 'High Impact Candidate') return 'from-[#3B82F6]/20 to-transparent border-[#3B82F6]/30';
    if (classification === 'Emerging Candidate') return 'from-[#F59E0B]/20 to-transparent border-[#F59E0B]/30';
    return 'from-gray-500/20 to-transparent border-gray-500/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full mb-4"
        >
          <CheckCircle className="w-4 h-4 text-[#10B981]" />
          <span className="text-sm text-[#10B981]">Assessment Complete</span>
        </motion.div>
        <h1 className="text-4xl font-bold text-white mb-2">Your AI Readiness Report</h1>
        <p className="text-gray-400">{assessment.company}</p>
      </div>

      <div className={`bg-gradient-to-b ${getClassificationBg(score.classification)} border rounded-2xl p-8 mb-8`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 mb-2">AI Readiness Score</p>
            <div className="flex items-baseline gap-2">
              <span className={`text-7xl font-bold ${getScoreColor(score.totalScore)}`}>
                {score.totalScore}
              </span>
              <span className="text-2xl text-gray-500">/100</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-2">Classification</p>
            <p className={`text-2xl font-bold ${getScoreColor(score.totalScore)}`}>
              {score.classification}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 pt-8 border-t border-white/10">
          <ScoreBreakdownItem
            label="Operational Complexity"
            value={score.breakdown.operationalComplexity}
            max={25}
          />
          <ScoreBreakdownItem
            label="Downtime Exposure"
            value={score.breakdown.downtimeExposure}
            max={25}
          />
          <ScoreBreakdownItem
            label="Reactive Ratio"
            value={score.breakdown.reactiveRatio}
            max={15}
          />
          <ScoreBreakdownItem
            label="Governance Pressure"
            value={score.breakdown.governancePressure}
            max={15}
          />
          <ScoreBreakdownItem
            label="AI Alignment"
            value={score.breakdown.aiStrategicAlignment}
            max={20}
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#064E3B]/30 to-[#0F172A]/50 border border-[#10B981]/30 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-[#10B981]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Estimated Annual Optimization Potential</h2>
            <p className="text-sm text-gray-400">Based on conservative industry benchmarks</p>
          </div>
        </div>

        <div className="text-center py-6">
          <p className="text-4xl md:text-5xl font-bold text-[#10B981]">
            {formatFullCurrency(roi.totalLow)} - {formatFullCurrency(roi.totalHigh)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ROIBreakdownItem
            icon={<Clock className="w-5 h-5" />}
            label="Downtime Reduction"
            low={roi.downtimeLow}
            high={roi.downtimeHigh}
          />
          <ROIBreakdownItem
            icon={<TrendingUp className="w-5 h-5" />}
            label="Labor Optimization"
            low={roi.laborLow}
            high={roi.laborHigh}
          />
          <ROIBreakdownItem
            icon={<Shield className="w-5 h-5" />}
            label="Inventory Efficiency"
            low={roi.inventoryLow}
            high={roi.inventoryHigh}
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-[#334155] rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">90-Day Strategic Pilot Summary</h2>
        <div className="space-y-4">
          <PilotPhase
            week="Week 1-2"
            title="Discovery & Assessment"
            description="Deep dive into data architecture and integration requirements"
          />
          <PilotPhase
            week="Week 3-4"
            title="System Integration"
            description={`Connect with your ${assessment.cmmsType} system`}
          />
          <PilotPhase
            week="Week 5-8"
            title="AI Deployment"
            description="Deploy and calibrate AI agents for your operational environment"
          />
          <PilotPhase
            week="Week 9-10"
            title="Validation"
            description="Operational testing and KPI benchmarking"
          />
          <PilotPhase
            week="Week 11-12"
            title="Analysis & Planning"
            description="Results analysis and enterprise rollout strategy"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/strategic-pilot">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/90 transition-colors"
          >
            Request Strategic Pilot
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
        >
          <Download className="w-4 h-4" />
          Report Sent to Email
        </motion.button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        A detailed PDF report has been sent to {assessment.email}
      </p>
    </motion.div>
  );
}

function ScoreBreakdownItem({ label, value, max }: { label: string; value: number; max: number }) {
  const percentage = (value / max) * 100;

  return (
    <div className="text-center">
      <div className="relative w-full h-2 bg-[#1E293B] rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute h-full bg-[#3B82F6] rounded-full"
        />
      </div>
      <p className="text-lg font-bold text-white">{Math.round(value)}/{max}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function ROIBreakdownItem({
  icon,
  label,
  low,
  high,
}: {
  icon: React.ReactNode;
  label: string;
  low: number;
  high: number;
}) {
  return (
    <div className="bg-[#0F172A]/50 border border-[#1E293B] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3 text-[#10B981]">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-lg font-bold text-white">
        {formatFullCurrency(low)} - {formatFullCurrency(high)}
      </p>
    </div>
  );
}

function PilotPhase({
  week,
  title,
  description,
}: {
  week: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-24 shrink-0">
        <span className="text-sm font-medium text-[#3B82F6]">{week}</span>
      </div>
      <div className="flex-1 pb-4 border-b border-[#1E293B] last:border-0">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
