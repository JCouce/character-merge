import React from 'react'
import styles from '../../styles.module.css'

export const Subheader = ({ children, ...rest }) => {
    return(
        <small className={styles.subheader} {...rest}>
        {children}
      </small>
    )
}

export default Subheader