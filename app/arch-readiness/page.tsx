import { Deck } from '@/components/core';
import {
  TitleSlide,
  ParadoxSlide,
  FailurePatternSlide,
  RootCauseSlide,
  TeamTopologiesSlide,
  AIForcingFunctionSlide,
  AIRequirementsSlide,
  EvolutionaryArchSlide,
  DataProblemSlide,
  ContrarianSlide,
  IndustryEvidenceSlide,
  ThinSliceSlide,
  HumanArchSlide,
  CodaSlide,
} from './slides';

export default function ArchReadinessDeck() {
  return (
    <Deck>
      <TitleSlide />
      <ParadoxSlide />
      <FailurePatternSlide />
      <RootCauseSlide />
      <TeamTopologiesSlide />
      <AIForcingFunctionSlide />
      <AIRequirementsSlide />
      <EvolutionaryArchSlide />
      <DataProblemSlide />
      <ContrarianSlide />
      <IndustryEvidenceSlide />
      <ThinSliceSlide />
      <HumanArchSlide />
      <CodaSlide />
    </Deck>
  );
}
