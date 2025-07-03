'use client';
import Button from '@/components/shared/Button/Button';
import styles from './Heading.module.scss';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import useWindowSize from '@/hooks/useWindowSize';

export default function Heading() {
  const { isMobile } = useWindowSize();
  return (
    <Wrapper>
      <h1 className={styles.title}>
        Reach Your {isMobile && <br />} Revenue Potential
        {!isMobile && <br />} The VentureTech Way
      </h1>
      <Button href="#">Let's Chat</Button>
    </Wrapper>
  );
}
