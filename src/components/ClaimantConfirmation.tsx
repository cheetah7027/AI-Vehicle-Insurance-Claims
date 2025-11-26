import React from 'react';
import { CheckCircle, Clock, UserCheck, FileCheck, Home } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { ProgressTracker } from './ProgressTracker';

interface ClaimantConfirmationProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

export function ClaimantConfirmation({ onNavigate, claimData }: ClaimantConfirmationProps) {
  const steps = [
    { label: 'Submitted', status: 'complete' as const },
    { label: 'Verified', status: 'active' as const },
    { label: 'Assigned', status: 'pending' as const }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="text-slate-900">Claim Confirmation</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl text-slate-900 mb-3">
            Claim Successfully Submitted
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            Your claim number is <span className="text-blue-600">{claimData.claimId || 'CLM-2025-0847'}</span>
          </p>
          <p className="text-slate-500">
            We'll send updates to your email and phone number on file
          </p>
        </div>

        {/* Status Tracker */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6">
          <h2 className="text-lg text-slate-900 mb-6">Real-Time Status</h2>
          <ProgressTracker steps={steps} />
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <FileCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-sm text-emerald-900 mb-1">Submitted</div>
              <div className="text-xs text-emerald-700">Nov 26, 2:34 PM</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-blue-900 mb-1">Verifying Coverage</div>
              <div className="text-xs text-blue-700">In progress...</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <div className="text-sm text-slate-600 mb-1">Pending Assignment</div>
              <div className="text-xs text-slate-500">Waiting</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg text-slate-900 mb-4">What Happens Next?</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-700">1</span>
              </div>
              <div>
                <div className="text-sm text-slate-900 mb-1">AI Coverage Verification</div>
                <div className="text-sm text-slate-600">
                  Our AI system is validating your coverage and analyzing claim details (typically 2-5 minutes)
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-700">2</span>
              </div>
              <div>
                <div className="text-sm text-slate-900 mb-1">Intelligent Assignment</div>
                <div className="text-sm text-slate-600">
                  Your claim will be automatically routed to the most qualified adjuster based on complexity and specialization
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-700">3</span>
              </div>
              <div>
                <div className="text-sm text-slate-900 mb-1">Adjuster Review</div>
                <div className="text-sm text-slate-600">
                  A human adjuster will review AI recommendations and contact you within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Summary */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h2 className="text-lg text-slate-900 mb-4">Claim Summary</h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500 mb-1">Incident Date</div>
              <div className="text-slate-900">November 24, 2025</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Vehicle</div>
              <div className="text-slate-900">2022 Honda Accord</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Estimated Coverage</div>
              <div className="text-slate-900">$2,300 - $2,900</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Your Deductible</div>
              <div className="text-slate-900">$500</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('welcome')}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => onNavigate('adjuster-dashboard')}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Adjuster Portal →
          </button>
        </div>

        {/* Support */}
        <div className="mt-8 text-center bg-slate-50 rounded-xl p-6">
          <p className="text-sm text-slate-600 mb-2">
            Need immediate assistance or have questions?
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <button className="text-blue-600 hover:text-blue-700">
              Call Support: 1-800-CLAIMS
            </button>
            <span className="text-slate-300">|</span>
            <button className="text-blue-600 hover:text-blue-700">
              Live Chat
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
