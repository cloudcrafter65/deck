import { getCurrentSite } from '@/lib/sites';
import BytejournalHome from './home/BytejournalHome';
import CyaireHome from './home/CyaireHome';

export default function Home() {
  const site = getCurrentSite();

  if (site.id === 'cyaire') {
    return <CyaireHome />;
  }

  return <BytejournalHome />;
}
