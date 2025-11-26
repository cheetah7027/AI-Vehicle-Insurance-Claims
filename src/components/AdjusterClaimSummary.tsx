import React from 'react';
import { ChevronLeft, FileText, Image, AlertTriangle, Shield, TrendingUp, ArrowRight, Info } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { Badge } from './Badge';
import { ConfidenceChip } from './ConfidenceChip';

interface AdjusterClaimSummaryProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

export function AdjusterClaimSummary({ onNavigate, claimData }: AdjusterClaimSummaryProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => onNavigate('adjuster-dashboard')}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl text-slate-900">
                  {claimData.selectedClaimId || 'CLM-2025-0847'}
                </h1>
                <Badge variant="info">Standard</Badge>
                <ConfidenceChip score={87} />
              </div>
              <p className="text-sm text-slate-500">Sarah Johnson • 2022 Honda Accord</p>
            </div>
            <button
              onClick={() => onNavigate('adjuster-routing', claimData)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Routing →
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI-Generated Summary */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg text-slate-900">AI-Generated Claim Summary</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="text-sm text-blue-900 mb-2">Executive Summary</div>
                <p className="text-sm text-blue-800">
                  Single-vehicle collision involving 2022 Honda Accord. Front-end damage consistent with parking lot impact at low speed. No injuries reported. Policy holder has active collision coverage with $500 deductible. Initial damage estimate: $2,800-$3,400.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Incident Date</div>
                  <div className="text-slate-900">November 24, 2025</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Location</div>
                  <div className="text-slate-900">San Francisco, CA</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Policy Status</div>
                  <div className="text-emerald-600">✓ Active & Valid</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Coverage Type</div>
                  <div className="text-slate-900">Collision</div>
                </div>
              </div>
            </div>

            {/* Extracted Evidence */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg text-slate-900">Extracted Evidence</h2>
                <span className="text-sm text-slate-500">(AI extracted these details)</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors">
                  <Image className="w-8 h-8 text-slate-400 mb-2" />
                  <div className="text-sm text-slate-900 mb-1">Front Damage</div>
                  <div className="text-xs text-slate-500">vehicle-front.jpg</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors">
                  <Image className="w-8 h-8 text-slate-400 mb-2" />
                  <div className="text-sm text-slate-900 mb-1">Bumper Detail</div>
                  <div className="text-xs text-slate-500">bumper-close.jpg</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors">
                  <FileText className="w-8 h-8 text-slate-400 mb-2" />
                  <div className="text-sm text-slate-900 mb-1">Estimate</div>
                  <div className="text-xs text-slate-500">repair-quote.pdf</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <div className="text-xs text-blue-900 mb-2">AI Damage Analysis</div>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Front bumper: Cracked (replacement recommended)</li>
                  <li>• Hood: Minor dent and paint damage</li>
                  <li>• Headlight assembly: Right side damaged</li>
                  <li>• No structural damage detected</li>
                </ul>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg text-slate-900">Risk Assessment</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-700">Fraud Risk Estimate</span>
                    <Badge variant="success" size="sm">Low - 12%</Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '12%' }} />
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="text-sm text-emerald-900 mb-2">Low Risk Indicators</div>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>✓ Photos contain valid EXIF metadata matching claim date</li>
                    <li>✓ Vehicle confirmed on policy, no recent changes</li>
                    <li>✓ Damage pattern consistent with stated incident</li>
                    <li>✓ No prior claims in last 24 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Severity & Routing */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">AI Recommendations</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 mb-2">Severity Label</div>
                  <Badge variant="info">Standard Complexity</Badge>
                </div>

                <div>
                  <div className="text-sm text-slate-600 mb-2">Suggested Routing Lane</div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="text-sm text-blue-900">Standard Auto Claims</div>
                    <div className="text-xs text-blue-700 mt-1">Estimated handling time: 2-3 days</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-600 mb-2">Priority Score</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <span className="text-sm text-slate-700">65/100</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <Info className="w-4 h-4" />
                    Why this recommendation?
                  </button>
                </div>
              </div>
            </div>

            {/* Confidence Breakdown */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">Confidence Breakdown</h2>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Document Extraction</span>
                    <span className="text-xs text-emerald-600">94%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Policy Validation</span>
                    <span className="text-xs text-emerald-600">92%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Damage Assessment</span>
                    <span className="text-xs text-blue-600">81%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '81%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600">Cost Estimation</span>
                    <span className="text-xs text-blue-600">79%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '79%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Required */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <div className="text-sm text-amber-900 mb-1">Action Required</div>
                  <p className="text-sm text-amber-800">
                    Review AI recommendations and proceed to routing or flag for manual review
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="text-sm text-slate-900 mb-3">Quick Actions</div>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 text-sm text-left text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  View Full Policy
                </button>
                <button className="w-full px-3 py-2 text-sm text-left text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  Contact Claimant
                </button>
                <button className="w-full px-3 py-2 text-sm text-left text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  Request Additional Docs
                </button>
                <button className="w-full px-3 py-2 text-sm text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Flag for Investigation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
