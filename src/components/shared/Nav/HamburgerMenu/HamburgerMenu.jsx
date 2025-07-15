import React from 'react';
import styles from './HamburgerMenu.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import hamburger from 'public/hamburger.png';

export default function HamburgerMenu({ isOpen = false, setIsOpen }) {
  return (
    <button
      className={clsx(styles.hamburgerMenu, isOpen ? styles.open : '')}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src={hamburger} alt="" className={styles.image} />
    </button>
  );
}
