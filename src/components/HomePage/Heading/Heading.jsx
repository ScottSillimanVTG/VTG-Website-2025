import Button from '@/components/shared/Button/Button';
import styles from './Heading.module.scss';

export default function Heading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Reach Your Revenue Potential <br /> The VentureTech Way
      </h1>
      <Button href="#">Let's Chat</Button>
    </div>
  );
}
