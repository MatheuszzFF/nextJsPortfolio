import Link from "next/link";
import styles from './headerTop.module.css'
import { ButtonPrimary } from '../../ui/ButtonPrimary/ButtonPrimary';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/UserContext';
import  Image  from 'next/image';

export const HeaderTop = () => {
  const {user, loading, logout} = useContext(UserContext)

  if(loading) {
    return (
      <div className={styles.headerTop}>
          <div className={`container d-flex justify-content-end `}>
            <p>carregando usuário...</p>
          </div>
      </div>
    )
  } else if(user) {
    return (
      <div className={styles.headerTop}>
          <div className={`container d-flex justify-content-end align-items-center`}>
            <Link className={styles.link} href="/accountSettings" title="Abrir configurações">
              <Image width="20" height="20" src="/engrenagem.png" alt="icone de engrenagem"/>
            </Link>
            <h5 style={{margin: 'auto 15px auto 0'}}>Bem vindo {user.displayName}</h5>
            <ButtonPrimary 
            isButtonTag={true} 
            onClick={logout}
            >Sair</ButtonPrimary>
          </div>
      </div>
    )
  } else { 
    return (
      <div className={styles.headerTop}>
          <div className={`container d-flex justify-content-end`}>
            <ButtonPrimary 
              isButtonTag={false}
              href='/login'
              >Login
            </ButtonPrimary>
          </div>
      </div>
      )
  }   
}