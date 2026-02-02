import { Deck } from '@/components/core';
import {
  TitleSlide,
  ProblemSlide,
  PressurePointsSlide,
  VisionSlide,
  DifferentiatorSlide,
  ApproachOverviewSlide,
  Stage1Slide,
  Stage2Slide,
  Stage3Slide,
  Stage4Slide,
  DeliveryModelSlide,
  OutcomesSlide,
  CaseStudiesSlide,
  ConcernsSlide,
  IndustryApplicationsSlide,
  NextStepsSlide,
  ClientInterestFormSlide,
  EndSlide,
} from './slides';
import { DeckTracker } from './components/DeckTracker';

export default function AMSClientPitchDeck() {
  return (
    <>
      <DeckTracker deckName="AMS Client Pitch" totalSlides={18} />
      <Deck>
        <TitleSlide />
        <ProblemSlide />
        <PressurePointsSlide />
        <VisionSlide />
        <DifferentiatorSlide />
        <ApproachOverviewSlide />
        <Stage1Slide />
        <Stage2Slide />
        <Stage3Slide />
        <Stage4Slide />
        <DeliveryModelSlide />
        <OutcomesSlide />
        <CaseStudiesSlide />
        <ConcernsSlide />
        <IndustryApplicationsSlide />
        <NextStepsSlide />
        <ClientInterestFormSlide />
        <EndSlide />
      </Deck>
    </>
  );
}
