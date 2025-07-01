import Image from 'next/image';
import styles from './Sponsors.module.scss';
import boomi from 'public/sponsors/boomi.png';
import conga from 'public/sponsors/conga.png';
import dealhub from 'public/sponsors/dealhub.png';
import hubspot from 'public/sponsors/hubspot.png';
import maxio from 'public/sponsors/maxio.png';
import salesforce from 'public/sponsors/salesforce.png';
import sup from 'public/sponsors/sup.png';
import Tiles from './Tiles/Tiles';
import Button from '@/components/shared/Button/Button';

const sponsors = [
  {
    src: boomi,
    alt: 'Boomi',
  },
  {
    src: conga,
    alt: 'Conga',
  },
  {
    src: dealhub,
    alt: 'DealHub',
  },
  {
    src: hubspot,
    alt: 'HubSpot',
  },
  {
    src: maxio,
    alt: 'Maxio',
  },
  {
    src: salesforce,
    alt: 'Salesforce',
  },
  {
    src: sup,
    alt: 'Sup',
  },
];

export default function Sponsors() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Growing Faster Together</h2>
      <Tiles sponsors={sponsors} />
      <Button href="#" classNames={styles.button}>
        Become a partner
      </Button>
    </div>
  );
}
