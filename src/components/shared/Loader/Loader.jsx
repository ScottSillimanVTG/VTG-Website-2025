import styles from './Loader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export default function Loader({
  size = '2xl',
  classNames = '',
  color = 'white',
  isFullPage = false,
}) {
  return (
    <div
      className={clsx(
        styles.loader,
        classNames,
        isFullPage && styles.isFullPage
      )}
    >
      <FontAwesomeIcon
        icon={faSpinner}
        className={styles.dottedIcon}
        size={size}
        color={color}
      />
    </div>
  );
}
