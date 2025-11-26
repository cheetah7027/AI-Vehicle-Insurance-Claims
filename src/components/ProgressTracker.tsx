import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  label: string;
  status: 'complete' | 'active' | 'pending';
}

interface ProgressTrackerProps {
  steps: Step[];
}

export function ProgressTracker({ steps }: ProgressTrackerProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                step.status === 'complete'
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : step.status === 'active'
                  ? 'bg-blue-50 border-blue-600 text-blue-600'
                  : 'bg-white border-slate-300 text-slate-400'
              }`}
            >
              {step.status === 'complete' ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`text-sm ${
                step.status === 'pending' ? 'text-slate-400' : 'text-slate-700'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 transition-colors ${
                step.status === 'complete' ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
