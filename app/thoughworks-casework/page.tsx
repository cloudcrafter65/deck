import { Deck } from '@/components/core';
import {
  TitleSlide,
  ApproachSlide,
  ApproachSlideB,
  DescentSlide,
  HypothesesSlide,
  StrategicRequirementsSlide,
  TOCSlide,
  AssumptionsSlide,
  NorthStarSlide,
  StrategyOnPageSlide,
  LandscapeSnapshotSlide,
  RootCauseSlide,
  DebtMapSlide,
  ArchOverviewSlide,
  KeyDecisionsASlide,
  KeyDecisionsBSlide,
  DataStrategySlide,
  SecurityArchSlide,
  NFRsSlide,
  TeamTopologiesSlide,
  GovernanceInsourcingSlide,
  DisengagementCriteriaSlide,
  ThreePopulationsSlide,
  ChangeProgrammeSlide,
  CriticalPathSlide,
  Phase0Slide,
  Phase1Slide,
  Phase23Slide,
  RunningBusinessSlide,
  VendorStrategySlide,
  TradeOffsSlide,
  RiskRegisterSlide,
  BusinessOutcomesSlide,
  TechMetricsSlide,
  FinancialFramingSlide,
  QASlide,
} from './slides';

export default function ThoughtworksCaseworkDeck() {
  return (
    <Deck>
      {/* Preamble */}
      <TitleSlide />
      <TOCSlide />

      {/* Part 1 — Approach, Intent & Strategy */}
      <ApproachSlide />
      <ApproachSlideB />
      <DescentSlide />
      <HypothesesSlide />
      <StrategicRequirementsSlide />
      {/* <AssumptionsSlide /> */}
      <NorthStarSlide />
      <StrategyOnPageSlide />

      {/* Part 2 — Current State Assessment */}
      <LandscapeSnapshotSlide />
      <RootCauseSlide />
      <DebtMapSlide />

      {/* Part 3 — Target Architecture */}
      <ArchOverviewSlide />
      <KeyDecisionsASlide />
      <KeyDecisionsBSlide />
      <DataStrategySlide />
      <SecurityArchSlide />
      <NFRsSlide />

      {/* Part 4 — Organisational Design */}
      <TeamTopologiesSlide />
      <GovernanceInsourcingSlide />
      <DisengagementCriteriaSlide />

      {/* Part 5 — Change Management & People */}
      <ThreePopulationsSlide />
      <ChangeProgrammeSlide />

      {/* Part 6 — Delivery Model & Roadmap */}
      <CriticalPathSlide />
      <Phase0Slide />
      <Phase1Slide />
      <Phase23Slide />
      <RunningBusinessSlide />

      {/* Part 7 — Vendor & Sourcing Strategy */}
      <VendorStrategySlide />

      {/* Part 8 — Trade-offs, Risks & Mitigations */}
      <TradeOffsSlide />
      <RiskRegisterSlide />

      {/* Part 9 — Outcomes & Success Measures */}
      <BusinessOutcomesSlide />
      <TechMetricsSlide />

      {/* Part 10 — Financial Framing */}
      <FinancialFramingSlide />

      {/* Closing */}
      <QASlide />
    </Deck>
  );
}
