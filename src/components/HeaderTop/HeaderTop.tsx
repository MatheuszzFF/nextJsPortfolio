import Link from "next/link";
import styles from './headerTop.module.css'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';

export const HeaderTop = () => {
   
  return (
    
    <div className={styles.headerTop}>
        <div className={`container d-flex justify-content-end`}>
          <ButtonPrimary 
          isButtonTag={false}
          href='/login'
          >Login</ButtonPrimary>
        </div>
    </div>
  );
};
