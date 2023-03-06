import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import cls from './IconButton.module.css';

interface IconButtonProps {
  className?: string;
  onClick?: () => void;
}

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = (props) => {
  // consts
  const { className, children, onClick } = props;
  return (
    <motion.div
      className={classNames(className, cls.iconButton)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
