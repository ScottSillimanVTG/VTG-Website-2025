'use client';
import styles from './Footer.module.scss';
import { navData } from '@/components/shared/Nav/Nav';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import glassdoor from 'public/glassdoor.png';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <Wrapper classNames={styles.innerContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} width={230} height="auto" alt="Logo" priority />
        </Link>
        <ul className={styles.list}>
          {navData.map(item => (
            <li key={item.title}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <Button isSmall classNames={styles.button}>
            Let's Chat
          </Button>
          <Button isSmall isVariant classNames={styles.button}>
            Become a partner
          </Button>
          <div className={styles.socials}>
            <a
              href="https://www.glassdoor.ca/Overview/Working-at-VentureTech-Group-EI_IE5066935.11,28.htm"
              target="_blank"
              className={styles.glassdoor}
            >
              <Image
                src={glassdoor}
                alt="Glassdoor Icon"
                width="100"
                height="auto"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/venturetechgroup/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#B3B3EE" size="xl" />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
