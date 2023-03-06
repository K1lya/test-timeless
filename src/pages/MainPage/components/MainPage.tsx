import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import cls from './MainPage.module.css';
import { TableWithFilter } from '../../../widgets/TableWithFilters';
import { IRowsOption } from '../../../widgets/TableWithFilters/TableWithFilter/TableWithFilter';

interface MainPageProps {
  className?: string;
}

const rowsOptions: IRowsOption[] = [
  {
    value: '10',
    label: '10',
  },
  {
    value: '50',
    label: '50',
  },
  {
    value: '100',
    label: '100',
  },
];

const genderOptions = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  },
];

const nationalOptions = [
  {
    value: 'us',
    label: 'US',
  },
  {
    value: 'ua',
    label: 'UA',
  },
  {
    value: 'tr',
    label: 'TR',
  },
  {
    value: 'rs',
    label: 'RS',
  },
  {
    value: 'nz',
    label: 'NZ',
  },
  {
    value: 'no',
    label: 'NO',
  },
  {
    value: 'nl',
    label: 'NL',
  },
  {
    value: 'mx',
    label: 'MX',
  },
  {
    value: 'ir',
    label: 'IR',
  },
  {
    value: 'in',
    label: 'IN',
  },
  {
    value: 'ie',
    label: 'IE',
  },
  {
    value: 'gb',
    label: 'GB',
  },
  {
    value: 'fr',
    label: 'FR',
  },
  {
    value: 'fi',
    label: 'FI',
  },
  {
    value: 'es',
    label: 'ES',
  },
  {
    value: 'dk',
    label: 'DK',
  },
  {
    value: 'de',
    label: 'DE',
  },
  {
    value: 'ch',
    label: 'CH',
  },
  {
    value: 'ca',
    label: 'CA',
  },
  {
    value: 'br',
    label: 'BR',
  },
  {
    value: 'au',
    label: 'AU',
  },
];

export const MainPage: FC<PropsWithChildren<MainPageProps>> = (props) => {
  // consts
  const { className } = props;
  return (
    <div className={classNames(className, cls.mainPage)}>
      <TableWithFilter
        rowsOptions={rowsOptions}
        genderOptions={genderOptions}
        nationalOptions={nationalOptions}
      />
    </div>
  );
};
