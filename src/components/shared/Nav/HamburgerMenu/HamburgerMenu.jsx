import React from 'react';
import styles from './HamburgerMenu.module.scss';
import clsx from 'clsx';

export default function HamburgerMenu({
  isOpen = false,
  setIsOpen,
  hamburgerMenuColor = '#fff',
}) {
  const backgroundColor = isOpen ? '#fff' : hamburgerMenuColor;
  return (
    <button
      className={clsx(styles.hamburgerMenu, isOpen ? styles.open : '')}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
    </button>
  );
}
