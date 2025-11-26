import React, { useState } from 'react';
import { AlertCircle, Sparkles, ArrowRight, ChevronLeft } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { Badge } from './Badge';

interface ClaimantFormProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

export function ClaimantForm({ onNavigate, claimData }: ClaimantFormProps) {
  const [formData, setFormData] = useState({
    dateOfIncident: '2025-11-24',
    location: '1234 Main St, San Francisco, CA',
    vehicleMake: '2022 Honda Accord',
    licensePlate: 'ABC-1234',
    damageDescription: 'Front bumper collision with stationary object in parking lot',
    policeReportNumber: '',
    witnessName: '',
    witnessContact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('coverage', { formData });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('upload')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <div className="text-slate-900">File a Claim</div>
            <div className="text-sm text-slate-500">Step 2 of 4</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl text-slate-900">
              Review Claim Details
            </h1>
            <Badge variant="info" size="sm">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-assisted
            </Badge>
          </div>
          <p className="text-slate-600">
            We've pre-filled this form with extracted information. Please review and edit as needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            {/* Incident Information */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">Incident Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Date of Incident *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfIncident}
                    onChange={(e) => setFormData({ ...formData, dateOfIncident: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Location of Incident *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Damage Description *
                  </label>
                  <textarea
                    value={formData.damageDescription}
                    onChange={(e) => setFormData({ ...formData, damageDescription: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">Vehicle Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Vehicle Make/Model/Year *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    License Plate *
                  </label>
                  <input
                    type="text"
                    value={formData.licensePlate}
                    onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg text-slate-900 mb-4">Additional Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Police Report Number
                  </label>
                  <input
                    type="text"
                    value={formData.policeReportNumber}
                    onChange={(e) => setFormData({ ...formData, policeReportNumber: e.target.value })}
                    placeholder="If applicable"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Witness Name
                  </label>
                  <input
                    type="text"
                    value={formData.witnessName}
                    onChange={(e) => setFormData({ ...formData, witnessName: e.target.value })}
                    placeholder="If applicable"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-700 mb-2">
                    Witness Contact
                  </label>
                  <input
                    type="text"
                    value={formData.witnessContact}
                    onChange={(e) => setFormData({ ...formData, witnessContact: e.target.value })}
                    placeholder="Phone or email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Check Coverage</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* AI Suggestions Sidebar */}
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-amber-900 mb-1">AI suggests missing:</div>
                  <div className="text-sm text-amber-800">Police report number</div>
                </div>
              </div>
              <p className="text-xs text-amber-700">
                Adding this information may speed up processing for collision claims
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-slate-900">AI Assistance</span>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="pb-3 border-b border-slate-100">
                  <div className="text-slate-700 mb-1">✓ Location verified</div>
                  <div>Address found in uploaded photo metadata</div>
                </div>
                <div className="pb-3 border-b border-slate-100">
                  <div className="text-slate-700 mb-1">✓ Vehicle matched</div>
                  <div>Confirmed against your policy records</div>
                </div>
                <div>
                  <div className="text-slate-700 mb-1">✓ Damage analyzed</div>
                  <div>Front-end impact detected in photos</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-xs text-slate-500 mb-2">Need help?</div>
              <div className="text-sm text-slate-700 mb-3">
                Contact support if you need assistance completing this form
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Get Help →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
