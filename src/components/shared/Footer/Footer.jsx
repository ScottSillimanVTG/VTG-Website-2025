'use client';
import styles from './Footer.module.scss';
import { navData } from '@/components/shared/Nav/Nav';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

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
        <Button classNames={styles.button}>Let's Chat</Button>
      </Wrapper>
    </footer>
  );
}
