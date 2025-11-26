import React from 'react';
import { CheckCircle, XCircle, Info, ArrowRight, ChevronLeft } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { ConfidenceChip } from './ConfidenceChip';
import { Badge } from './Badge';

interface ClaimantCoverageProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

export function ClaimantCoverage({ onNavigate, claimData }: ClaimantCoverageProps) {
  const handleSubmit = () => {
    onNavigate('confirmation', { claimId: 'CLM-2025-0847' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('form')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <div className="text-slate-900">File a Claim</div>
            <div className="text-sm text-slate-500">Step 3 of 4</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl text-slate-900">
              Coverage Validation
            </h1>
            <ConfidenceChip score={87} />
          </div>
          <p className="text-slate-600">
            AI has validated your coverage based on your policy and claim details
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Coverage Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Policy Summary */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">Your Policy Coverage</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Policy Number</div>
                  <div className="text-blue-900">POL-2024-5892</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Policy Holder</div>
                  <div className="text-blue-900">Sarah Johnson</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Deductible</div>
                  <div className="text-xl text-blue-900">$500</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Policy Limit</div>
                  <div className="text-xl text-blue-900">$50,000</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">How your deductible works</span>
                </div>
                <p className="text-sm text-slate-600">
                  You'll pay the first $500 of covered repairs. We'll cover the remaining costs up to your policy limit.
                </p>
              </div>
            </div>

            {/* Coverage Analysis */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">What's Covered</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-emerald-900 mb-1">Collision Damage</div>
                    <div className="text-sm text-emerald-700">Front bumper and hood repairs are covered under your collision coverage</div>
                  </div>
                  <Badge variant="success" size="sm">Covered</Badge>
                </div>

                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-emerald-900 mb-1">Vehicle Towing</div>
                    <div className="text-sm text-emerald-700">Up to $100 for towing from the incident location</div>
                  </div>
                  <Badge variant="success" size="sm">Covered</Badge>
                </div>

                <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-emerald-900 mb-1">Rental Car</div>
                    <div className="text-sm text-emerald-700">$40/day for up to 30 days while vehicle is being repaired</div>
                  </div>
                  <Badge variant="success" size="sm">Covered</Badge>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm text-red-900 mb-1">Pre-existing Damage</div>
                    <div className="text-sm text-red-700">Scratches on rear bumper appear to be prior to incident</div>
                  </div>
                  <Badge variant="danger" size="sm">Not Covered</Badge>
                </div>
              </div>
            </div>

            {/* Estimated Costs */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">Estimated Costs</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-sm text-slate-600">AI Estimated Repair Cost</span>
                  <span className="text-slate-900">$2,800 - $3,400</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Your Deductible</span>
                  <span className="text-slate-900">- $500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-900">Estimated Coverage</span>
                  <span className="text-xl text-emerald-600">$2,300 - $2,900</span>
                </div>
              </div>

              <div className="mt-4 bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-600">
                  This is an AI-generated estimate. Final amounts will be determined after adjuster review and repair shop assessment.
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Submit Claim</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="text-sm text-slate-900 mb-3">AI Analysis Details</div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Policy Match</span>
                    <ConfidenceChip score={95} showLabel={false} size="sm" />
                  </div>
                  <div className="text-xs text-slate-500">Vehicle confirmed on policy</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Coverage Type</span>
                    <ConfidenceChip score={92} showLabel={false} size="sm" />
                  </div>
                  <div className="text-xs text-slate-500">Collision coverage active</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Damage Assessment</span>
                    <ConfidenceChip score={81} showLabel={false} size="sm" />
                  </div>
                  <div className="text-xs text-slate-500">Based on uploaded photos</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="text-sm text-blue-900 mb-2">
                Why this recommendation?
              </div>
              <p className="text-xs text-blue-700">
                AI analyzed your policy terms, claim details, and uploaded photos to determine coverage eligibility and estimate costs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-xs text-slate-500 mb-2">Questions about coverage?</div>
              <div className="text-sm text-slate-700 mb-3">
                Our team is here to help explain your benefits
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
