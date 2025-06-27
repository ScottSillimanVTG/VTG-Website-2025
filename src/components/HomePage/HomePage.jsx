import Image from 'next/image';
import Nav from '../shared/Nav/Nav';
import Wrapper from '../shared/Wrapper/Wrapper';
import Heading from './Heading/Heading';
import styles from './HomePage.module.scss';
import wave from 'public/wave.png';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={wave} alt="" className={styles.wave} />
        <Wrapper>
          <Nav />
          <Heading />
        </Wrapper>
      </div>
    </div>
  );
}
