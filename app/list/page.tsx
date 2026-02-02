import { getCurrentSite } from '@/lib/sites';
import BytejournalList from './BytejournalList';
import CyaireList from './CyaireList';

export default function ListPage() {
  const site = getCurrentSite();

  if (site.id === 'cyaire') {
    return <CyaireList />;
  }

  return <BytejournalList />;
}
