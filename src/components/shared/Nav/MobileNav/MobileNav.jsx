import NavLinks from '../NavLinks/NavLinks';
import styles from './MobileNav.module.scss';
import clsx from 'clsx';

export default function MobileNav({ navData, pathname, setIsOpen }) {
  return (
    <>
      <nav className={clsx(styles.mobileNav)}>
        <ul>
          <NavLinks
            navData={navData}
            pathname={pathname}
            isMobile
            setIsOpen={setIsOpen}
          />
        </ul>
      </nav>
      <button
        onClick={() => setIsOpen(false)}
        className={styles.overlay}
      ></button>
    </>
  );
}
