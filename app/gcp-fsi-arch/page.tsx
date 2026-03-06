'use client';

import { Deck } from '@/components/core';
import { DeckTracker } from './components/DeckTracker';
import {
  TitleSlide,
  MarketRealitySlide,
  BlockerSlide,
  CoreThesisSlide,
  ProvenROISlide,
  ThreePillarsSlide,
  ComplianceMindForgeSlide,
  SecureEnclavesSlide,
  AgenticAISlide,
  PilotToProductionSlide,
  GovernSlide,
  ValueFramingSlide,
  ProfileSlide,
  ExecutionPlanSlide,
  ConclusionSlide,
} from './slides';

export default function GcpFsiArchDeck() {
  return (
    <>
      <DeckTracker deckName="GCP FSI Architecture" totalSlides={15} />
      <Deck>
      <TitleSlide />
      <MarketRealitySlide />
      <BlockerSlide />
      <CoreThesisSlide />
      <ProvenROISlide />
      <ThreePillarsSlide />
      <ComplianceMindForgeSlide />
      <SecureEnclavesSlide />
      <AgenticAISlide />
      <PilotToProductionSlide />
      <GovernSlide />
      <ValueFramingSlide />
      <ProfileSlide />
      <ExecutionPlanSlide />
      <ConclusionSlide />
      </Deck>
    </>
  );
}
