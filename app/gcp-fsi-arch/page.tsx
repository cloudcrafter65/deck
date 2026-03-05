import { Deck } from '@/components/core';
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
  );
}
