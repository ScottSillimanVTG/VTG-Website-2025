import styles from './Button.module.scss';
import clsx from 'clsx';

export default function Button({
  children,
  classNames,
  isSmall = false,
  href = null,
  isVariant = false,
  handleClick = () => {},
  style = {},
}) {
  const Element = href ? 'a' : 'button';
  return (
    <Element
      style={style}
      className={clsx(
        styles.button,
        classNames,
        isSmall && styles.small,
        isVariant && styles.variant,
        href && styles.anchor
      )}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Element>
  );
}
