import { FC } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { Menu } from '../Menu/Menu';
import {
  IOption,
} from '../../../../../widgets/TableWithFilters/TableWithFilter/TableWithFilter';

interface SelectFilterProps {
  placeholder?: string;
  options: IOption[];
  onChange: (
    newValue: SingleValue<IOption>,
  ) => void;
}

const stylesConfigForSelector: StylesConfig<IOption> = {
  control: () => ({
    background: '#13161D',
    borderRadius: '40px',
    padding: '7px 12px',
    cursor: 'pointer',
    minWidth: '98px',
    height: '40px',
    display: 'flex',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    background: 'rgba(32, 33, 40, 0.5)',
    border: '1px solid rgba(207, 123, 90, 0.1)',
    boxShadow: 'inset 0px 4px 12px -4px rgba(207, 123, 90, 0.24)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    overflow: 'auto',
    maxHeight: '500px',
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

export const SelectFilter: FC<SelectFilterProps> = (props) => {
  // consts
  const {
    placeholder,
    options,
    onChange,
  } = props;
  return (
    <Select<IOption, false>
      closeMenuOnSelect
      isSearchable={false}
      placeholder={placeholder}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu,
      }}
      styles={stylesConfigForSelector}
      options={options}
      onChange={(newValue) => onChange(newValue)}
      defaultValue={null}
      isClearable
    />
  );
};
