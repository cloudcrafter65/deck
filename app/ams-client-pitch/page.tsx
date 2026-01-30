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
  EndSlide,
} from './slides';

export default function AMSClientPitchDeck() {
  return (
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
      <EndSlide />
    </Deck>
  );
}
