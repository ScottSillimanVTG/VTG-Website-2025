import Image from 'next/image';
import Nav from '../shared/Nav/Nav';
import Heading from './Heading/Heading';
import styles from './HomePage.module.scss';
import wave from 'public/gradient.gif';
import Footer from '../shared/Footer/Footer';
import Strategy from './Strategy/Strategy';
import Services from './Services/Services';
import Sponsors from './Sponsors/Sponsors';

export default function HomePage() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.viewport}>
          <Image src={wave} alt="" className={styles.wave} />
          <Nav />
          <Heading />
        </div>
        <Strategy />
      </div>
      <Services />
      <Sponsors />
      <Footer />
    </>
  );
}
