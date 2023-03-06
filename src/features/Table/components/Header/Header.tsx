import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  headers: string[];
}

export const Header: FC<HeaderProps> = ({ headers }) => (
  <div className={styles.header}>
    {headers.map((header) => (
      <div
        key={header}
        className={styles.columnHeader}
      >
        {header}
      </div>
    ))}
  </div>
);
