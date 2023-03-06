import { FC } from 'react';
import { components, MenuProps } from 'react-select';
import { motion } from 'framer-motion';
import { RowFilterEnum } from '../SelectFilter/SelectRows';
import {
  IRowsOption,
} from '../../../../../widgets/TableWithFilters/TableWithFilter/TableWithFilter';

interface IMenuProps {
  activeFilter: RowFilterEnum;
  menuProps: MenuProps<IRowsOption>
}

export const Menu: FC<IMenuProps> = (props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <components.Menu {...props.menuProps}>
      {props.menuProps.children}
    </components.Menu>
  </motion.div>
);
