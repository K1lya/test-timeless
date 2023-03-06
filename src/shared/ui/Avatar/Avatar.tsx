import { FC } from 'react';
import cls from './Avatar.module.css';

interface AvatarProps {
  picUrl: string;
  alt: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  // consts
  const { picUrl, alt } = props;
  return (
    <img
      src={picUrl}
      className={cls.avatar}
      alt={alt}
    />
  );
};
