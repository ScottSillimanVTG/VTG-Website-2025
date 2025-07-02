import Image from 'next/image';
import Nav from '../shared/Nav/Nav';
import Wrapper from '../shared/Wrapper/Wrapper';
import Heading from './Heading/Heading';
import styles from './HomePage.module.scss';
import wave from 'public/wave.png';
import Footer from '../shared/Footer/Footer';
import Strategy from './Strategy/Strategy';
import Services from './Services/Services';
import Sponsors from './Sponsors/Sponsors';
import Testimoinals from './Testimoinals/Testimoinals';

export default function HomePage() {
  return (
    <>
      <div className={styles.background}>
        <Wrapper>
          <Image src={wave} alt="" className={styles.wave} />
        </Wrapper>
        <Nav />
        <Heading />
        <Strategy />
      </div>
      <Services />
      <Testimoinals />
      <Sponsors />
      <Footer />
    </>
  );
}
