import React from 'react';
import { Info } from 'lucide-react';

interface ConfidenceChipProps {
  score: number;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export function ConfidenceChip({ score, showLabel = true, size = 'md' }: ConfidenceChipProps) {
  const getColor = () => {
    if (score >= 85) return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (score >= 70) return 'text-blue-700 bg-blue-50 border-blue-200';
    if (score >= 50) return 'text-amber-700 bg-amber-50 border-amber-200';
    return 'text-red-700 bg-red-50 border-red-200';
  };

  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1';

  return (
    <div className={`inline-flex items-center gap-1 rounded-full border ${getColor()} ${sizeClasses}`}>
      <Info className="w-3 h-3" />
      {showLabel && <span>Confidence:</span>}
      <span>{score}%</span>
    </div>
  );
}
