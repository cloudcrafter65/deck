import { Deck } from '@/components/core';
import {
  TitleSlide,
  CyaireRagSlide,
  MaybankSlide,
  BankIndonesiaSlide,
  KBankSlide,
  AseanCyberSlide,
  LgEaSlide,
  KrungsriSlide,
  GreatEasternSlide,
  GicSlide,
  IbmSupplyChainSlide,
  IbmGovSlide,
  OrangeMhaSlide,
  CloseSlide,
} from './slides';

export default function MyProfileDeck() {
  return (
    <Deck>
      <TitleSlide />
      <CyaireRagSlide />
      <MaybankSlide />
      <BankIndonesiaSlide />
      <KBankSlide />
      <AseanCyberSlide />
      <LgEaSlide />
      <KrungsriSlide />
      <GreatEasternSlide />
      <GicSlide />
      <IbmSupplyChainSlide />
      <IbmGovSlide />
      <OrangeMhaSlide />
      <CloseSlide />
    </Deck>
  );
}
