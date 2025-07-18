import styles from './Wrapper.module.scss';
import clsx from 'clsx';

export default function Wrapper({
  children,
  classNames = {},
  isSmall = false,
  style = {},
}) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        classNames,
        isSmall && styles.wrapperSmall
      )}
      style={style}
    >
      {children}
    </div>
  );
}
