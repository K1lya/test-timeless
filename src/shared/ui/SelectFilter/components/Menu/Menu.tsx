import { components, MenuProps } from 'react-select';
import { motion } from 'framer-motion';
import { IOption } from '../../../../../widgets/TableWithFilters/TableWithFilter/TableWithFilter';

export const Menu = (props: MenuProps<IOption>) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <components.Menu {...props}>
      {props.children}
    </components.Menu>
  </motion.div>
);
