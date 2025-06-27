import styles from './DesktopNav.module.scss';
import NavLinks from '../NavLinks/NavLinks';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import logo from 'public/logo.png';

export default function DesktopNav({ navData, pathname }) {
  return (
    <nav className={clsx(styles.nav)} id="navigation">
      <ul className={styles.desktopList}>
        <li>
          <Link href="/">
            <Image src={logo} width="auto" height={100} alt="Logo" priority />
          </Link>
        </li>
        <div className={styles.navRight}>
          <NavLinks navData={navData} pathname={pathname} />
        </div>
      </ul>
    </nav>
  );
}
