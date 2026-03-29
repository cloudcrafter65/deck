import { Deck } from '@/components/core';
import {
  TitleSlide,
  TOCSlide,
  ApproachSlide,
  ClarifyingQuestionsSlide,
  CurrentStateSlide,
  RootCauseSlide,
  PrinciplesSlide,
  ArchitectureSlide,
  OmnichannelCapabilitiesSlide,
  ContingencyPlansSlide,
  PricingProblemSlide,
  OrgDesignSlide,
  CriticalPathSlide,
  ProgrammeSlide,
  TradeoffsSlide,
  FinancialFrameSlide,
  SuccessMeasuresSlide,
  BoardMessageSlide,
  AppendixSlide,
} from './slides';

export default function ThoughtworksInterviewDeck() {
  return (
    <Deck>
      <TitleSlide />
      <TOCSlide />
      <ApproachSlide />
      <ClarifyingQuestionsSlide />
      <CurrentStateSlide />
      <RootCauseSlide />
      <PrinciplesSlide />
      <ArchitectureSlide />
      <OmnichannelCapabilitiesSlide />
      <ContingencyPlansSlide />
      <PricingProblemSlide />
      <OrgDesignSlide />
      <CriticalPathSlide />
      <ProgrammeSlide />
      <TradeoffsSlide />
      <FinancialFrameSlide />
      <SuccessMeasuresSlide />
      <BoardMessageSlide />
      <AppendixSlide />
    </Deck>
  );
}
