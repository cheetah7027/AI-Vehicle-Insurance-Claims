import React, { useState } from 'react';
import { ChevronLeft, Users, CheckCircle, AlertCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { Badge } from './Badge';

interface AdjusterRoutingProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

interface Adjuster {
  id: string;
  name: string;
  specialty: string;
  availability: string;
  currentLoad: number;
  avgHandlingTime: string;
  successRate: number;
  recommended: boolean;
}

export function AdjusterRouting({ onNavigate, claimData }: AdjusterRoutingProps) {
  const [selectedAdjuster, setSelectedAdjuster] = useState<string>('1');
  const [useAIRecommendation, setUseAIRecommendation] = useState(true);

  const adjusters: Adjuster[] = [
    {
      id: '1',
      name: 'Jennifer Martinez',
      specialty: 'Standard Auto Claims',
      availability: 'Available Now',
      currentLoad: 8,
      avgHandlingTime: '2.3 days',
      successRate: 96,
      recommended: true
    },
    {
      id: '2',
      name: 'David Thompson',
      specialty: 'Complex Auto Claims',
      availability: 'Available Today',
      currentLoad: 12,
      avgHandlingTime: '3.1 days',
      successRate: 94,
      recommended: false
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      specialty: 'High Value Claims',
      availability: 'Available Tomorrow',
      currentLoad: 15,
      avgHandlingTime: '4.2 days',
      successRate: 98,
      recommended: false
    }
  ];

  const handleAssign = () => {
    onNavigate('adjuster-audit', claimData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('adjuster-summary', claimData)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl text-slate-900">Intelligent Routing & Assignment</h1>
              <p className="text-sm text-slate-500">
                {claimData.selectedClaimId || 'CLM-2025-0847'} • Sarah Johnson
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendation Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-lg text-blue-900 mb-2">AI Recommended Assignment</div>
                  <p className="text-sm text-blue-800 mb-4">
                    Based on claim complexity, adjuster specialization, current workload, and historical performance,
                    Jennifer Martinez is the optimal choice for this claim.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-700" />
                      <span className="text-sm text-blue-700">Best match for claim type</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-700" />
                      <span className="text-sm text-blue-700">Available immediately</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-700" />
                      <span className="text-sm text-blue-700">Optimal workload</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adjuster Selection */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg text-slate-900">Select Adjuster</h2>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useAIRecommendation}
                    onChange={(e) => setUseAIRecommendation(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-700">Use AI recommendation</span>
                </label>
              </div>

              <div className="space-y-4">
                {adjusters.map((adjuster) => (
                  <div
                    key={adjuster.id}
                    onClick={() => setSelectedAdjuster(adjuster.id)}
                    className={`relative border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      selectedAdjuster === adjuster.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {adjuster.recommended && (
                      <div className="absolute top-0 right-4 transform -translate-y-1/2">
                        <Badge variant="info" size="sm">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          AI Recommended
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-slate-600" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-slate-900">{adjuster.name}</h3>
                          {selectedAdjuster === adjuster.id && (
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>

                        <div className="text-sm text-slate-600 mb-3">{adjuster.specialty}</div>

                        <div className="grid grid-cols-4 gap-4">
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Availability</div>
                            <div className={`text-sm ${
                              adjuster.availability === 'Available Now'
                                ? 'text-emerald-600'
                                : 'text-slate-700'
                            }`}>
                              {adjuster.availability}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Current Load</div>
                            <div className="text-sm text-slate-900">{adjuster.currentLoad} claims</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Avg. Time</div>
                            <div className="text-sm text-slate-900">{adjuster.avgHandlingTime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Success Rate</div>
                            <div className="text-sm text-emerald-600">{adjuster.successRate}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignment Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleAssign}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Assign Claim</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Save Draft
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Manual Override */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-slate-600" />
                <h2 className="text-slate-900">Manual Override</h2>
              </div>

              <p className="text-sm text-slate-600 mb-4">
                You can override the AI recommendation and assign to any available adjuster.
              </p>

              <div className="space-y-3">
                <button className="w-full px-4 py-2 text-sm text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  View All Adjusters
                </button>
                <button className="w-full px-4 py-2 text-sm text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  Create Custom Route
                </button>
                <button className="w-full px-4 py-2 text-sm text-left text-slate-700 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  Assign to Team
                </button>
              </div>
            </div>

            {/* Routing Logic */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-slate-900 mb-4">Routing Logic</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Complexity Match</span>
                  <span className="text-emerald-600">98%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Workload Balance</span>
                  <span className="text-emerald-600">92%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Availability Score</span>
                  <span className="text-emerald-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Historical Performance</span>
                  <span className="text-emerald-600">96%</span>
                </div>
              </div>
            </div>

            {/* Claim Summary */}
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-sm text-slate-900 mb-3">Claim Details</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Severity</span>
                  <Badge variant="info" size="sm">Standard</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Estimated Cost</span>
                  <span className="text-slate-900">$2,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fraud Risk</span>
                  <Badge variant="success" size="sm">Low</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Priority</span>
                  <span className="text-slate-900">65/100</span>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="text-sm text-blue-900 mb-2">Need Help?</div>
              <p className="text-sm text-blue-700 mb-3">
                Contact the routing team if you need assistance with assignment decisions
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Get Support →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
