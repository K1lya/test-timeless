import { FC } from 'react';
import classNames from 'classnames';
import cls from './Pagination.module.css';
import { ArrowButton } from '../ArrowButton/ArrowButton';

interface PaginationProps {
  pages: number;
  activePage: number;
  onClickLeft: () => void;
  onClickRight: () => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  // consts
  const {
    pages,
    activePage,
    onClickLeft,
    onClickRight,
  } = props;
  return (
    <div className={classNames(cls.pagination)}>
      <ArrowButton
        arrow="left"
        onClick={onClickLeft}
      />
      <div>
        {`${activePage} of ${pages}`}
      </div>
      <ArrowButton
        arrow="right"
        onClick={onClickRight}
      />
    </div>
  );
};
