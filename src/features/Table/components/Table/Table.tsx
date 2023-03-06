// import { FC } from 'react';
// import classNames from 'classnames';
// import cls from './Table.module.css';
//
// interface TableProps {
//   className?: string;
// }
//
// export const Table: FC<TableProps> = (props) => {
//   // consts
//   const { className } = props;
//   return (
//     <div className={classNames(cls.Table, className)}>
//       Table
//     </div>
//   );
// };
// TODO: Refactor
import React from 'react';
import moment from 'moment';
import styles from './Table.module.css';
import { IUser } from '../../../../shared/types/User';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { Loader } from '../../../../shared/ui/Loader/Loader';

type TableProps = {
  data: IUser[];
  isLoading: boolean;
};

export const Table: React.FC<TableProps> = ({ data, isLoading }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.columnHeader}>Profile</div>
      <div className={styles.columnHeader}>Location</div>
      <div className={styles.columnHeader}>Email</div>
      <div className={styles.columnHeader}>Birthday</div>
      <div className={styles.columnHeader}>Gender</div>
      <div className={styles.columnHeader}>Nationality</div>
      <div className={styles.columnHeader}>Phone</div>
    </div>
    {
      isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.body}>
          {data.map((user) => (
            <div
              key={user.login.uuid}
              className={styles.row}
            >
              <div className={styles.cellName}>
                <Avatar
                  picUrl={user.picture.thumbnail}
                  alt="usr"
                />
                <span>
                  {`${user.name.first} ${user.name.last}`}
                </span>
              </div>
              <div className={styles.cell}>{user.location.city}</div>
              <div className={styles.cell}>{user.email}</div>
              <div className={styles.cell}>
                {moment(user.dob.date).format('MM.DD.yyyy')}
              </div>
              <div className={styles.cell}>{user.gender}</div>
              <div className={styles.cell}>{user.nat}</div>
              <div className={styles.cell}>{user.phone}</div>
            </div>
          ))}
        </div>
      )
    }

  </div>
);
