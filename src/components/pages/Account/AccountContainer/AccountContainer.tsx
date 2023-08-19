'use client'

import  Image  from 'next/image';
import styles from './accountContainer.module.css';
import { TAccountContainer } from './type';


export function AccountContainer({children, title}: TAccountContainer) {
    return (
        <main className={styles.main}>
            <div className={`${styles.flex}`}>
                <div className={ styles.backgroundImage}>
                    <Image style={{objectFit: 'cover'}} alt="Login background" src='/images/loginBackground.jpg' fill={true}/>
                </div>
                <div className={styles.loginSection}>
                <h2>{title}</h2>
                {children}
                </div>
            </div>
        </main>
    )
}