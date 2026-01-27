import { Deck } from '@/components/core';
import {
  POVTitleSlide,
  ThesisSlide,
  ProblemSlide,
  DeepMasteryIntroSlide,
  MasteryInsightSlide,
  SignalsSlide,
  CollaborationSlide,
  ArchitectureOverviewSlide,
  SignalLayerSlide,
  DecisionEngineSlide,
  AdaptationLayerSlide,
  HumanInterfaceSlide,
  ArchitectureDiagramSlide,
  MetricsSlide,
  ResultsSlide,
  ConclusionSlide,
  POVEndSlide,
} from './slides';

export default function POVDeck() {
  return (
    <Deck>
      {/* Intro */}
      <POVTitleSlide />
      <ThesisSlide />
      <ProblemSlide />

      {/* Deep Mastery */}
      <DeepMasteryIntroSlide />
      <MasteryInsightSlide />

      {/* Signals */}
      <SignalsSlide />

      {/* Collaboration */}
      <CollaborationSlide />

      {/* Architecture - Detailed */}
      <ArchitectureOverviewSlide />
      <SignalLayerSlide />
      <DecisionEngineSlide />
      <AdaptationLayerSlide />
      <HumanInterfaceSlide />
      <ArchitectureDiagramSlide />

      {/* Metrics & Results */}
      <MetricsSlide />
      <ResultsSlide />

      {/* Conclusion */}
      <ConclusionSlide />
      <POVEndSlide />
    </Deck>
  );
}
