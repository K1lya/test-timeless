import { FC } from 'react';
import Select, {
  OptionsOrGroups, SingleValue, StylesConfig,
} from 'react-select';
import {
  IRowsOption,
} from '../../../../../widgets/TableWithFilters/TableWithFilter/TableWithFilter';
import { Menu } from '../Menu/Menu';

export enum RowFilterEnum {
  TEN = '10',
  FIFTY = '50',
  HUNDRED = '100',
}

interface SelectFilterProps {
  placeholder?: string;
  options: OptionsOrGroups<IRowsOption, any>;
  activeFilter: RowFilterEnum;
  onChange: (
    newValue: SingleValue<IRowsOption>,
  ) => void;
}

const stylesConfigForSelector: StylesConfig<IRowsOption> = {
  control: () => ({
    background: '#13161D',
    borderRadius: '40px',
    padding: '7px 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    color: '#DCD8D3',
    width: '110px',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    background: 'rgba(32, 33, 40, 0.5)',
    border: '1px solid rgba(207, 123, 90, 0.1)',
    boxShadow: 'inset 0px 4px 12px -4px rgba(207, 123, 90, 0.24)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    color: '#DCD8D3',

  }),
  option: (baseStyles, { isFocused, isSelected }) => ({
    ...baseStyles,
    backgroundColor:
      isFocused
        ? 'rgba(19, 22, 29)'
        : undefined,
    borderRadius: '16px',
    color: isSelected
      ? 'rgba(207, 123, 90)'
      : '#DCD8D3',
    ':active': {
      backgroundColor: 'rgba(19, 22, 29)',
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: '#DCD8D3',
  }),
};

export const SelectRows: FC<SelectFilterProps> = (props) => {
  // consts
  const {
    placeholder, options, activeFilter, onChange,
  } = props;
  return (
    <Select<IRowsOption, false>
      closeMenuOnSelect
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement="top"
      components={{
        IndicatorSeparator: () => null,
        Menu: (props) => (
          <Menu
            menuProps={props}
            activeFilter={activeFilter}
          />
        ),
      }}
      styles={stylesConfigForSelector}
      options={options}
      onChange={(newValue) => onChange(newValue)}
      defaultValue={options[0]}
    />
  );
};
