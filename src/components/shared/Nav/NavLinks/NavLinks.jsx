import NavLink from './NavLink/NavLink';
import styles from './NavLinks.module.scss';

export default function NavLinks({
  navData,
  pathname,
  isMobile = false,
  setIsOpen,
}) {
  return (
    <>
      {navData.map((navLinkData, index) => {
        const key = navLinkData.Component
          ? `custom-${index}`
          : navLinkData.title;
        return (
          <div key={key} className={styles.link}>
            <NavLink
              {...navLinkData}
              pathname={pathname}
              isMobile={isMobile}
              index={index}
              setIsOpen={setIsOpen}
            />
          </div>
        );
      })}
    </>
  );
}
