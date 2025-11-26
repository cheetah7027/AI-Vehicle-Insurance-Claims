import React from 'react';
import { ArrowRight, Shield, Zap, Clock, Users } from 'lucide-react';
import { Screen } from '../App';

interface ClaimantWelcomeProps {
  onNavigate: (screen: Screen) => void;
}

export function ClaimantWelcome({ onNavigate }: ClaimantWelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl text-slate-900">ClaimFlow AI</span>
          </div>
          <button
            onClick={() => onNavigate('adjuster-dashboard')}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Adjuster Portal →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Claims Processing
            </div>
            <h1 className="text-5xl text-slate-900 mb-4">
              File Your Vehicle Claim in Minutes
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI-assisted system extracts information from your photos and documents,
              validates coverage instantly, and gets your claim to the right adjuster fast.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-slate-900 mb-2">Smart Document Extraction</div>
              <p className="text-sm text-slate-600">
                Upload photos and receipts—AI extracts relevant details automatically
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-slate-900 mb-2">Instant Coverage Check</div>
              <p className="text-sm text-slate-600">
                Know what's covered, deductibles, and limits before you submit
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-slate-900 mb-2">Intelligent Routing</div>
              <p className="text-sm text-slate-600">
                Claims automatically routed to the right adjuster based on complexity
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('upload')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              <span className="text-lg">File a Claim</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-slate-500 mt-4">
              Average filing time: 4 minutes • 98% customer satisfaction
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
          © 2025 ClaimFlow AI. Secure, transparent, and built for trust.
        </div>
      </footer>
    </div>
  );
}
