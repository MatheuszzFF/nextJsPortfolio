import Link from 'next/link';
import React from 'react';
import { TButtonPrimary } from './type';
import styles from './ButtonPrimary.module.css';

export const ButtonPrimary = (props: TButtonPrimary) => {
  const {
      isButtonTag,
      onClick,
      children,
      href
  } = props
  if(isButtonTag) {
    return (
      <button
        onClick={onClick}
        className={styles.primaryButton}
      >
          {children}
      </button>
    )
  } else {
    return (
      <Link
        onClick={onClick}
        className={styles.primaryButton}
        href={href}
        >
          {children}
      </Link>
    )
  }
}



