'use client';

import { Deck } from '@/components/core';
import {
  TitleSlide,
  TOCSlide,
  CapitalInflowSlide,
  ExecutionFailingSlide,
  FailureMapSlide,
  LegacySystemsSlide,
  DataQualitySlide,
  OrganizationalSkepticismSlide,
  ROIMeasurementSlide,
  SolutionFrameworkSlide,
  IntegrationSolutionSlide,
  RexeraCaseStudySlide,
  DomainSpecificAISlide,
  GovernanceSlide,
  AugmentationSlide,
  AssetLivingCaseStudySlide,
  TransactionROISlide,
  ROIEvidenceSlide,
  FourCsFrameworkSlide,
  AdoptionParadoxSlide,
  SingaporeBeachheadSlide,
  TimelineWindowSlide,
  ConvergingForcesSlide,
  OpportunitySlide,
  CloseSlide,
  ProfileSlide,
} from './slides';

export default function CREPovDeck() {
  return (
    <Deck>
      <TitleSlide />
      <TOCSlide />
      <CapitalInflowSlide />
      <ExecutionFailingSlide />
      <FailureMapSlide />
      <LegacySystemsSlide />
      <DataQualitySlide />
      <OrganizationalSkepticismSlide />
      <ROIMeasurementSlide />
      <SolutionFrameworkSlide />
      <IntegrationSolutionSlide />
      <RexeraCaseStudySlide />
      <DomainSpecificAISlide />
      <GovernanceSlide />
      <AugmentationSlide />
      <AssetLivingCaseStudySlide />
      <TransactionROISlide />
      <ROIEvidenceSlide />
      <FourCsFrameworkSlide />
      <AdoptionParadoxSlide />
      <SingaporeBeachheadSlide />
      <TimelineWindowSlide />
      <ConvergingForcesSlide />
      <OpportunitySlide />
      <CloseSlide />
      <ProfileSlide />
    </Deck>
  );
}
