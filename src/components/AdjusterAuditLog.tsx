import React from 'react';
import { ChevronLeft, CheckCircle, Clock, User, Bot, FileText, Home } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { Badge } from './Badge';

interface AdjusterAuditLogProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

interface AuditEntry {
  id: string;
  timestamp: string;
  actor: 'AI' | 'User';
  actorName: string;
  action: string;
  details: string;
  status: 'success' | 'info' | 'warning';
}

export function AdjusterAuditLog({ onNavigate, claimData }: AdjusterAuditLogProps) {
  const auditEntries: AuditEntry[] = [
    {
      id: '1',
      timestamp: '2025-11-26 14:38:22',
      actor: 'User',
      actorName: 'John Adjuster',
      action: 'Assigned Claim',
      details: 'Claim assigned to Jennifer Martinez (Standard Auto Claims)',
      status: 'success'
    },
    {
      id: '2',
      timestamp: '2025-11-26 14:37:45',
      actor: 'AI',
      actorName: 'ClaimFlow AI',
      action: 'Routing Recommendation',
      details: 'Recommended assignment to Jennifer Martinez based on complexity match (98%), workload balance (92%), and availability (100%)',
      status: 'info'
    },
    {
      id: '3',
      timestamp: '2025-11-26 14:37:12',
      actor: 'User',
      actorName: 'John Adjuster',
      action: 'Viewed Claim Summary',
      details: 'Reviewed AI-generated claim summary and risk assessment',
      status: 'info'
    },
    {
      id: '4',
      timestamp: '2025-11-26 14:36:45',
      actor: 'AI',
      actorName: 'ClaimFlow AI',
      action: 'Risk Assessment Complete',
      details: 'Fraud risk estimated at 12% (Low). No SIU flags raised. All validation checks passed.',
      status: 'success'
    },
    {
      id: '5',
      timestamp: '2025-11-26 14:36:20',
      actor: 'AI',
      actorName: 'ClaimFlow AI',
      action: 'Coverage Validation',
      details: 'Policy POL-2024-5892 validated. Collision coverage active. Deductible: $500. Policy limit: $50,000. Confidence: 87%',
      status: 'success'
    },
    {
      id: '6',
      timestamp: '2025-11-26 14:35:58',
      actor: 'User',
      actorName: 'Sarah Johnson (Claimant)',
      action: 'Submitted Claim Form',
      details: 'Completed and submitted claim details for review',
      status: 'info'
    },
    {
      id: '7',
      timestamp: '2025-11-26 14:35:10',
      actor: 'AI',
      actorName: 'ClaimFlow AI',
      action: 'Document Extraction',
      details: 'Extracted 5 data fields from uploaded documents. Date: Nov 24, 2025. Location: San Francisco, CA. Vehicle: 2022 Honda Accord. Average confidence: 89%',
      status: 'success'
    },
    {
      id: '8',
      timestamp: '2025-11-26 14:34:22',
      actor: 'User',
      actorName: 'Sarah Johnson (Claimant)',
      action: 'Uploaded Documents',
      details: 'Uploaded 3 files: vehicle-front.jpg, bumper-close.jpg, repair-quote.pdf',
      status: 'info'
    },
    {
      id: '9',
      timestamp: '2025-11-26 14:34:05',
      actor: 'User',
      actorName: 'Sarah Johnson (Claimant)',
      action: 'Initiated Claim',
      details: 'Started FNOL (First Notice of Loss) process for vehicle claim',
      status: 'info'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => onNavigate('adjuster-routing', claimData)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl text-slate-900">Status & Audit Log</h1>
              <p className="text-sm text-slate-500">
                {claimData.selectedClaimId || 'CLM-2025-0847'} • Sarah Johnson
              </p>
            </div>
          </div>

          {/* Status Summary */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-900">Assigned</span>
              </div>
              <div className="text-xs text-emerald-700">Jennifer Martinez</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-900">Processing Time</span>
              </div>
              <div className="text-xs text-blue-700">4 minutes 17 seconds</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-purple-900">AI Actions</span>
              </div>
              <div className="text-xs text-purple-700">4 automated steps</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-slate-600" />
                <span className="text-sm text-slate-900">User Actions</span>
              </div>
              <div className="text-xs text-slate-700">5 user interactions</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Audit Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-6">Complete Audit Trail</h2>

              <div className="space-y-6">
                {auditEntries.map((entry, index) => (
                  <div key={entry.id} className="relative">
                    {index !== auditEntries.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200" />
                    )}

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            entry.actor === 'AI'
                              ? 'bg-blue-100'
                              : 'bg-slate-100'
                          }`}
                        >
                          {entry.actor === 'AI' ? (
                            <Bot className="w-6 h-6 text-blue-600" />
                          ) : (
                            <User className="w-6 h-6 text-slate-600" />
                          )}
                        </div>
                      </div>

                      <div className="flex-1 pb-6">
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-slate-900 mb-1">{entry.action}</div>
                              <div className="text-sm text-slate-600">{entry.actorName}</div>
                            </div>
                            <Badge
                              variant={
                                entry.status === 'success'
                                  ? 'success'
                                  : entry.status === 'warning'
                                  ? 'warning'
                                  : 'info'
                              }
                              size="sm"
                            >
                              {entry.actor}
                            </Badge>
                          </div>

                          <p className="text-sm text-slate-700 mb-3">{entry.details}</p>

                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{entry.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
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
                Back to Dashboard
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Impact Summary */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">AI Impact Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 mb-2">Time Saved</div>
                  <div className="text-2xl text-emerald-600">~18 min</div>
                  <div className="text-xs text-slate-500 mt-1">
                    vs. manual processing average
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-600 mb-3">Automation Breakdown</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Document extraction</span>
                      <span className="text-slate-900">~5 min saved</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Coverage validation</span>
                      <span className="text-slate-900">~8 min saved</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Risk assessment</span>
                      <span className="text-slate-900">~3 min saved</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Routing analysis</span>
                      <span className="text-slate-900">~2 min saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transparency & Explainability */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="text-sm text-blue-900 mb-2">Full Transparency</div>
              <p className="text-sm text-blue-700 mb-3">
                Every AI action is logged with confidence scores and reasoning. Human judgment always has the final say.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <CheckCircle className="w-4 h-4" />
                <span>All decisions are auditable</span>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">Export & Reports</h2>
              
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <div className="flex-1">
                    <div className="text-sm">Export Audit Log</div>
                    <div className="text-xs text-slate-500">CSV format</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <div className="flex-1">
                    <div className="text-sm">Generate Report</div>
                    <div className="text-xs text-slate-500">PDF summary</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <div className="flex-1">
                    <div className="text-sm">Share Timeline</div>
                    <div className="text-xs text-slate-500">Send to stakeholders</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-sm text-slate-900 mb-3">Recommended Next Steps</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">1.</span>
                  <span>Adjuster will contact claimant within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">2.</span>
                  <span>Vehicle inspection to be scheduled</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">3.</span>
                  <span>Final cost assessment after repair shop review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
