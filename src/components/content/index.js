import React from 'react'
import styles from '../../styles.module.css'

export const Content = ({ children, ...rest }) => {
    return(
        <div className={styles.content} {...rest}>
        {children}
      </div>
    )
}

export default Content  