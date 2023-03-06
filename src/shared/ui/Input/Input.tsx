import React, { FC } from 'react';
import classNames from 'classnames';
import cls from './Input.module.css';
import { IconButton } from '../IconButton/IconButton';
import { ReactComponent as Img } from '../../assets/icons/ActionsIcons.svg';

interface InputProps {
  className?: string;
  placeholder?: string;
  withSearch?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick?: () => void;
  value: string;
}

export const Input: FC<InputProps> = (props) => {
  // consts
  const {
    className,
    placeholder,
    onChange,
    withSearch,
    onSearchClick,
    value,
  } = props;
  return (
    <div
      className={classNames(cls.inputContainer, className)}
    >
      <input
        type="text"
        className={classNames(cls.inputText)}
        placeholder={placeholder || ''}
        onChange={(e) => onChange(e)}
        value={value}
      />
      {
        withSearch && (
          <IconButton onClick={onSearchClick}>
            <Img
              width="16px"
              height="16px"
            />
          </IconButton>
        )
      }

    </div>
  );
};
