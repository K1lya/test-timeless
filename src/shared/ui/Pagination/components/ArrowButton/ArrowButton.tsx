import { FC } from 'react';
import classNames from 'classnames';
import cls from './ArrowButton.module.css';
import { IconButton } from '../../../IconButton/IconButton';
import {
  ReactComponent as ArrowRight,
} from '../../../../assets/icons/ArrowRight.svg';
import {
  ReactComponent as ArrowLeft,
} from '../../../../assets/icons/ArrowLeft.svg';

interface ArrowButtonProps {
  className?: string;
  arrow: 'left' | 'right';
  onClick: () => void;
}

export const ArrowButton: FC<ArrowButtonProps> = (props) => {
  // consts
  const { className, arrow, onClick } = props;
  return (
    <IconButton onClick={onClick}>
      <div className={classNames(cls.arrowButton, className)}>
        {arrow === 'left' ? (
          <ArrowLeft
            width="24px"
            height="24px"
          />
        ) : (
          <ArrowRight
            width="24px"
            height="24px"
          />
        )}
      </div>
    </IconButton>
  );
};
