import React from 'react';
import styles from '../../styles.module.css'

export const Header = ({ children, ...rest }) => {
  return (
    <h1 className={styles.header} {...rest}>
      {children}
    </h1>
  );
};

export default Header;
