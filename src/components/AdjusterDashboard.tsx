import React, { useState } from 'react';
import { Search, Filter, AlertTriangle, TrendingUp, Clock, Shield, ArrowLeft } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { Badge } from './Badge';

interface AdjusterDashboardProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
}

interface Claim {
  id: string;
  claimNumber: string;
  claimant: string;
  vehicle: string;
  dateSubmitted: string;
  priority: 'Low Complexity' | 'Standard' | 'High Risk' | 'SIU Flag';
  estimatedCost: string;
  aiConfidence: number;
  status: string;
}

export function AdjusterDashboard({ onNavigate }: AdjusterDashboardProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const claims: Claim[] = [
    {
      id: '1',
      claimNumber: 'CLM-2025-0847',
      claimant: 'Sarah Johnson',
      vehicle: '2022 Honda Accord',
      dateSubmitted: '2 min ago',
      priority: 'Standard',
      estimatedCost: '$2,800',
      aiConfidence: 87,
      status: 'Pending Assignment'
    },
    {
      id: '2',
      claimNumber: 'CLM-2025-0846',
      claimant: 'Michael Chen',
      vehicle: '2021 Tesla Model 3',
      dateSubmitted: '15 min ago',
      priority: 'High Risk',
      estimatedCost: '$12,400',
      aiConfidence: 73,
      status: 'Pending Review'
    },
    {
      id: '3',
      claimNumber: 'CLM-2025-0845',
      claimant: 'Emma Davis',
      vehicle: '2023 Ford F-150',
      dateSubmitted: '1 hour ago',
      priority: 'Low Complexity',
      estimatedCost: '$850',
      aiConfidence: 94,
      status: 'Ready to Route'
    },
    {
      id: '4',
      claimNumber: 'CLM-2025-0844',
      claimant: 'Robert Williams',
      vehicle: '2020 BMW X5',
      dateSubmitted: '2 hours ago',
      priority: 'SIU Flag',
      estimatedCost: '$18,900',
      aiConfidence: 45,
      status: 'Requires Investigation'
    },
    {
      id: '5',
      claimNumber: 'CLM-2025-0843',
      claimant: 'Lisa Anderson',
      vehicle: '2022 Toyota Camry',
      dateSubmitted: '3 hours ago',
      priority: 'Standard',
      estimatedCost: '$4,200',
      aiConfidence: 82,
      status: 'Pending Assignment'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low Complexity':
        return 'success';
      case 'Standard':
        return 'info';
      case 'High Risk':
        return 'warning';
      case 'SIU Flag':
        return 'danger';
      default:
        return 'neutral';
    }
  };

  const handleClaimClick = (claimNumber: string) => {
    onNavigate('adjuster-summary', { selectedClaimId: claimNumber });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('welcome')}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </button>
              <div>
                <h1 className="text-2xl text-slate-900">Claims Dashboard</h1>
                <p className="text-sm text-slate-500">Welcome back, John Adjuster</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Export
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Settings
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Pending Assignment</span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-2xl text-slate-900">12</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-700">AI Prioritized</span>
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl text-blue-900">8</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-amber-700">High Risk</span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl text-amber-900">3</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-red-700">SIU Flags</span>
                <Shield className="w-4 h-4 text-red-600" />
              </div>
              <div className="text-2xl text-red-900">1</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by claim number, claimant name, or vehicle..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Claims
              </button>
              <button
                onClick={() => setSelectedFilter('high-priority')}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  selectedFilter === 'high-priority'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                High Priority
              </button>
              <button className="px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Claims List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Claim Details
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Claimant
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Estimated Cost
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    AI Confidence
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs text-slate-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {claims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm text-blue-600">{claim.claimNumber}</div>
                      <div className="text-xs text-slate-500">{claim.dateSubmitted}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900">{claim.claimant}</div>
                      <div className="text-xs text-slate-500">{claim.vehicle}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={getPriorityColor(claim.priority) as any} size="sm">
                        {claim.priority}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900">{claim.estimatedCost}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              claim.aiConfidence >= 80
                                ? 'bg-emerald-500'
                                : claim.aiConfidence >= 60
                                ? 'bg-blue-500'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${claim.aiConfidence}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-600">{claim.aiConfidence}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{claim.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleClaimClick(claim.claimNumber)}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        Review →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
