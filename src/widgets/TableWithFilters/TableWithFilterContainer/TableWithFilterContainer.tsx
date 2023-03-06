import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import cls from './TableWithFilterContainer.module.css';

interface TableContainerProps {
  className?: string;
}

export const TableWithFilterContainer: FC<
  PropsWithChildren<TableContainerProps>
  > = (
    props,
  ) => {
  // consts
    const { className, children } = props;
    return (
      <div className={classNames(className, cls.tableContainer)}>
        {children}
      </div>
    );
  };
