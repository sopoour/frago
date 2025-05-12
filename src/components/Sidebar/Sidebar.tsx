import { FC } from 'react';
import styles from './Sidebar.module.scss';

type Props = {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const Sidebar: FC<Props> = ({ children, open, close, style, className }) => {
  return (
    <>
      <div onClick={close} className={`${styles.backdrop} ${open ? styles.open : ''}`} />
      <span
        className={`${styles.content} ${open ? styles.open : ''} ${className}`}
        id="sidebar"
        aria-label="sidebar"
        style={style}
      >
        {children}
      </span>
    </>
  );
};

export default Sidebar;
