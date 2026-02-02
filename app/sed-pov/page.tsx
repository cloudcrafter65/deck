'use client';

import { Deck } from '@/components/core';
import {
  TitleSlide,
  InvisibleDecisionSlide,
  CapabilityVsConsequenceSlide,
  FalseConfidenceSlide,
  ExperiencedBuyersSlide,
  MultiStakeholderSlide,
  DemoToDeliveryGapSlide,
  SEAsRiskManagerSlide,
  PowerOfNoSlide,
  LeadershipProblemSlide,
  ChecklistSlide,
  ClosingSlide,
} from './slides';

export default function SEDPovDeck() {
  return (
    <Deck>
      <TitleSlide />
      <InvisibleDecisionSlide />
      <CapabilityVsConsequenceSlide />
      <FalseConfidenceSlide />
      <ExperiencedBuyersSlide />
      <MultiStakeholderSlide />
      <DemoToDeliveryGapSlide />
      <SEAsRiskManagerSlide />
      <PowerOfNoSlide />
      <LeadershipProblemSlide />
      <ChecklistSlide />
      <ClosingSlide />
    </Deck>
  );
}
