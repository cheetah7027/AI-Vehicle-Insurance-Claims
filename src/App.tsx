import React, { useState } from 'react';
import { ClaimantWelcome } from './components/ClaimantWelcome';
import { ClaimantUpload } from './components/ClaimantUpload';
import { ClaimantForm } from './components/ClaimantForm';
import { ClaimantCoverage } from './components/ClaimantCoverage';
import { ClaimantConfirmation } from './components/ClaimantConfirmation';
import { AdjusterDashboard } from './components/AdjusterDashboard';
import { AdjusterClaimSummary } from './components/AdjusterClaimSummary';
import { AdjusterRouting } from './components/AdjusterRouting';
import { AdjusterAuditLog } from './components/AdjusterAuditLog';

export type Screen = 
  | 'welcome'
  | 'upload'
  | 'form'
  | 'coverage'
  | 'confirmation'
  | 'adjuster-dashboard'
  | 'adjuster-summary'
  | 'adjuster-routing'
  | 'adjuster-audit';

export interface ClaimData {
  claimId?: string;
  uploadedFiles?: File[];
  extractedData?: any;
  formData?: any;
  selectedClaimId?: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [claimData, setClaimData] = useState<ClaimData>({});

  const navigateTo = (screen: Screen, data?: Partial<ClaimData>) => {
    if (data) {
      setClaimData(prev => ({ ...prev, ...data }));
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <ClaimantWelcome onNavigate={navigateTo} />;
      case 'upload':
        return <ClaimantUpload onNavigate={navigateTo} claimData={claimData} />;
      case 'form':
        return <ClaimantForm onNavigate={navigateTo} claimData={claimData} />;
      case 'coverage':
        return <ClaimantCoverage onNavigate={navigateTo} claimData={claimData} />;
      case 'confirmation':
        return <ClaimantConfirmation onNavigate={navigateTo} claimData={claimData} />;
      case 'adjuster-dashboard':
        return <AdjusterDashboard onNavigate={navigateTo} />;
      case 'adjuster-summary':
        return <AdjusterClaimSummary onNavigate={navigateTo} claimData={claimData} />;
      case 'adjuster-routing':
        return <AdjusterRouting onNavigate={navigateTo} claimData={claimData} />;
      case 'adjuster-audit':
        return <AdjusterAuditLog onNavigate={navigateTo} claimData={claimData} />;
      default:
        return <ClaimantWelcome onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderScreen()}
    </div>
  );
}
