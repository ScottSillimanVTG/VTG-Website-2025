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
  const classnames = clsx(
    styles.button,
    classNames,
    isSmall && styles.small,
    isVariant && styles.variant,
    href && styles.anchor
  );
  if (href) {
    return (
      <Element style={style} className={classnames} href={href}>
        {children}
      </Element>
    );
  }
  return (
    <Element style={style} className={classnames} onClick={handleClick}>
      {children}
    </Element>
  );
}
