import React, { FC } from 'react';
import moment from 'moment/moment';
import styles from './Body.module.css';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { IUser } from '../../../../shared/types/User';

interface BodyProps {
  data: IUser[];
}

export const Body: FC<BodyProps> = ({ data }) => (
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
);
