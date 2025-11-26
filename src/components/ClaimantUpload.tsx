import React, { useState } from 'react';
import { Upload, FileText, Image, CheckCircle, Sparkles, ArrowRight, ChevronLeft } from 'lucide-react';
import { Screen, ClaimData } from '../App';
import { ConfidenceChip } from './ConfidenceChip';

interface ClaimantUploadProps {
  onNavigate: (screen: Screen, data?: Partial<ClaimData>) => void;
  claimData: ClaimData;
}

interface ExtractedItem {
  field: string;
  value: string;
  confidence: number;
}

export function ClaimantUpload({ onNavigate, claimData }: ClaimantUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showExtraction, setShowExtraction] = useState(false);

  const mockExtractedData: ExtractedItem[] = [
    { field: 'Date of Incident', value: 'Nov 24, 2025', confidence: 94 },
    { field: 'Location', value: '1234 Main St, San Francisco, CA', confidence: 89 },
    { field: 'Vehicle Make/Model', value: '2022 Honda Accord', confidence: 92 },
    { field: 'License Plate', value: 'ABC-1234', confidence: 87 },
    { field: 'Damage Type', value: 'Front bumper collision', confidence: 81 }
  ];

  const handleFileUpload = (type: string) => {
    const newFile = `${type}-${Date.now()}.jpg`;
    setUploadedFiles([...uploadedFiles, newFile]);
    
    if (uploadedFiles.length === 0) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowExtraction(true);
      }, 1500);
    }
  };

  const handleContinue = () => {
    onNavigate('form', { extractedData: mockExtractedData });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('welcome')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <div className="text-slate-900">File a Claim</div>
            <div className="text-sm text-slate-500">Step 1 of 4</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl text-slate-900 mb-3">
            Upload Your Documents
          </h1>
          <p className="text-slate-600">
            Upload photos of damage, receipts, or any supporting documents.
            Our AI will extract relevant information automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Area */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-slate-900 mb-2">
                Drop files here or click to upload
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Supports: JPG, PNG, PDF (max 10MB each)
              </p>
              <button
                onClick={() => handleFileUpload('document')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Choose Files
              </button>
            </div>

            {/* Quick Upload Options */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleFileUpload('photo')}
                className="bg-white rounded-lg border border-slate-200 p-4 text-left hover:border-blue-400 transition-colors"
              >
                <Image className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-sm text-slate-900 mb-1">Vehicle Photos</div>
                <div className="text-xs text-slate-500">Damage images</div>
              </button>
              <button
                onClick={() => handleFileUpload('receipt')}
                className="bg-white rounded-lg border border-slate-200 p-4 text-left hover:border-blue-400 transition-colors"
              >
                <FileText className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-sm text-slate-900 mb-1">Receipts</div>
                <div className="text-xs text-slate-500">Repair estimates</div>
              </button>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-sm text-slate-700 mb-3">Uploaded Files</div>
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 flex-1 truncate">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AI Extraction Preview */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-slate-900">AI Extraction Preview</span>
            </div>

            {!showExtraction && !isProcessing && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-sm text-slate-500">
                  Upload documents to see AI-extracted data
                </p>
              </div>
            )}

            {isProcessing && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm text-slate-700 mb-1">Processing documents...</p>
                <p className="text-xs text-slate-500">Extracting claim details</p>
              </div>
            )}

            {showExtraction && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="text-sm text-blue-900 mb-1">✓ AI extracted these details</div>
                  <div className="text-xs text-blue-700">Review and edit in the next step</div>
                </div>

                <div className="space-y-3">
                  {mockExtractedData.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 last:border-0">
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-1">{item.field}</div>
                        <div className="text-sm text-slate-900">{item.value}</div>
                      </div>
                      <ConfidenceChip score={item.confidence} showLabel={false} size="sm" />
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Continue to Claim Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
