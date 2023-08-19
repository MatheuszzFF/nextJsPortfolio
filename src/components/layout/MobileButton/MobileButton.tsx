import React from 'react'
import styles from './MobileButton.module.css'

type TMobileButton = {
    onClick: () => void,
    scrolled: boolean,
    mobileActive: boolean
}



export const MobileButton = (props: TMobileButton) => {
  const { onClick, scrolled, mobileActive} = props
  return (
    <div 
    onClick={onClick} 
    className={styles.mobile}
    >
      <div 
      className={`${styles.btn} ${scrolled || mobileActive ? styles.active : ''}`}
      ></div>
    </div>
  )
}
