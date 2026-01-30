import { Deck } from '@/components/core';
import {
  TitleSlide,
  ExecutiveSummarySlide,
  MarketOpportunitySlide,
  MarketGrowthSlide,
  IndustryAnalysisSlide,
  CompetitiveLandscapeSlide,
  PositioningSlide,
  BusinessModelSlide,
  UnitEconomicsSlide,
  SalesCycleSlide,
  TargetCustomerSlide,
  GTMChannelsSlide,
  PartnershipStrategySlide,
  Year1MilestonesSlide,
  TeamPlanSlide,
  FinancialProjectionsSlide,
  RiskAnalysisSlide,
  FundingSlide,
  SuccessMetricsSlide,
  EndSlide,
} from './slides';

export default function AppModDeck() {
  return (
    <Deck>
      <TitleSlide />
      <ExecutiveSummarySlide />
      <MarketOpportunitySlide />
      <MarketGrowthSlide />
      <IndustryAnalysisSlide />
      <CompetitiveLandscapeSlide />
      <PositioningSlide />
      <BusinessModelSlide />
      <UnitEconomicsSlide />
      <SalesCycleSlide />
      <TargetCustomerSlide />
      <GTMChannelsSlide />
      <PartnershipStrategySlide />
      <Year1MilestonesSlide />
      <TeamPlanSlide />
      <FinancialProjectionsSlide />
      <RiskAnalysisSlide />
      <FundingSlide />
      <SuccessMetricsSlide />
      <EndSlide />
    </Deck>
  );
}
