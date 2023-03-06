import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useQuery } from 'react-query';
import { SingleValue } from 'react-select';
import cls from './TableWithFilter.module.css';
import { TableWithFilterContainer } from '../TableWithFilterContainer/TableWithFilterContainer';
import { Input } from '../../../shared/ui/Input/Input';
import { SelectFilter } from '../../../shared/ui/SelectFilter';
import { Table } from '../../../features/Table';
import { Pagination } from '../../../shared/ui/Pagination';
import { userService } from '../../../shared/api/services/userService';
import { SelectRows } from '../../../shared/ui/SelectRows';
import { RowFilterEnum } from '../../../shared/ui/SelectRows/components/SelectFilter/SelectRows';
import { useFilterData } from '../../../shared/lib/hooks/useFilterData';
import { GenderEnum, NationalityEnum } from '../../../shared/types/User';

export interface IRowsOption {
  value: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
}

interface TableWithFilterProps {
  rowsOptions: IRowsOption[];
  genderOptions: IOption[];
  nationalOptions: IOption[];
}

export const TableWithFilter: FC<TableWithFilterProps> = (props) => {
  // consts
  const {
    rowsOptions,
    genderOptions,
    nationalOptions,
  } = props;

  // States
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<RowFilterEnum>(RowFilterEnum.TEN);
  const [gender, setGender] = useState<GenderEnum | null>(null);
  const [national, setNational] = useState<NationalityEnum | null>(null);

  // Api
  const {
    data,
    isLoading,
  } = useQuery(
    ['getAll', page, rows, gender, national],
    () => userService.getAll({
      page, rowFilter: rows, genderFilter: gender, nationalityFilter: national,
    }),
  );

  // Hooks
  const filterData = useFilterData(data?.data.results, search);

  // Handlers
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickLeft = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const onClickRight = () => {
    if (page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  const onChangeRow = (
    newValue: SingleValue<IRowsOption>,
  ) => {
    if (newValue) {
      setRows(newValue.value as RowFilterEnum);
    }
  };

  const onChangeGender = (
    newValue: SingleValue<IRowsOption>,
  ) => {
    if (newValue) {
      setGender(newValue.value as GenderEnum);
      return;
    }
    setGender(newValue);
  };

  const onChangeNational = (
    newValue: SingleValue<IRowsOption>,
  ) => {
    if (newValue) {
      setNational(newValue.value as NationalityEnum);
      return;
    }
    setNational(newValue);
  };

  return (
    <TableWithFilterContainer>
      <div className={classNames(cls.tableWithFilter)}>
        <Input
          withSearch
          placeholder="Search"
          onChange={onInputChangeHandler}
          value={search}
        />
        <div className={cls.filtersContainer}>
          <SelectFilter
            options={genderOptions}
            onChange={onChangeGender}
            placeholder="Gender"
          />
          <SelectFilter
            options={nationalOptions}
            onChange={onChangeNational}
            placeholder="Nationality"
          />
        </div>
        <Table
          data={filterData}
          isLoading={isLoading}
        />
        <div className={cls.paginationContainer}>
          <div style={{ width: '0px' }} />
          <Pagination
            pages={10}
            activePage={page}
            onClickLeft={onClickLeft}
            onClickRight={onClickRight}
          />
          <SelectRows
            options={rowsOptions}
            activeFilter={rows}
            onChange={onChangeRow}
          />
        </div>
      </div>
    </TableWithFilterContainer>
  );
};
