import React from 'react';
import styles from './Table.module.css';
import { IUser } from '../../../../shared/types/User';
import { Loader } from '../../../../shared/ui/Loader/Loader';
import { Header } from '../Header/Header';
import { Body } from '../Body/Body';

type TableProps = {
  data: IUser[];
  isLoading: boolean;
};

const headers = [
  'Profile',
  'Location',
  'Email',
  'Birthday',
  'Gender',
  'Nationality',
  'Phone',
];

export const Table: React.FC<TableProps> = ({ data, isLoading }) => (
  <div className={styles.container}>
    <Header headers={headers} />
    {
      isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <Body data={data} />
      )
    }
  </div>
);
