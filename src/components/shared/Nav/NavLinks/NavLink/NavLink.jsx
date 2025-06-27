import clsx from 'clsx';
import styles from './NavLink.module.scss';
import Link from 'next/link';

export default function NavLink({
  url = '',
  pathname = '',
  isMobile = false,
  title = '',
  Component = null,
  setIsOpen = () => {},
  isAnchor,
}) {
  const removeSlashes = ({ url }) => url.replace(/\//g, '');
  const isActive = removeSlashes({ url }) === removeSlashes({ url: pathname });
  if (Component)
    return (
      <li>
        <Component />
      </li>
    );

  const closeNav = () => setIsOpen(false);

  return (
    <li
      key={title}
      className={clsx(
        styles.menuItem,
        isActive ? styles.isActive : '',
        isMobile ? styles.isMobile : ''
      )}
    >
      {!isAnchor && (
        <Link href={url} onClick={closeNav}>
          {title}
        </Link>
      )}
      {isAnchor && <a href={url}>{title}</a>}
    </li>
  );
}
