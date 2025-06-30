import Button from '@/components/shared/Button/Button';
import styles from './Heading.module.scss';
import Wrapper from '@/components/shared/Wrapper/Wrapper';

export default function Heading() {
  return (
    <Wrapper>
      <h1 className={styles.title}>
        Reach Your Revenue Potential <br /> The VentureTech Way
      </h1>
      <Button href="#">Let's Chat</Button>
    </Wrapper>
  );
}
