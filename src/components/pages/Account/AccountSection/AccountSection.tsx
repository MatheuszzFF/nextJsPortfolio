'use client'

import { Input, ButtonPrimary } from 'components';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../../context/UserContext/UserContext';
import Link from 'next/link'
import { AccountContainer } from '../AccountContainer/AccountContainer';
import styles from './accountSection.module.css';
import { useRouter } from 'next/navigation';

export function AccountSection({ sectionType}: any) {

    const { login, createUser, error, sendPasswordReset, signInWithGoogle, user } = useContext(UserContext)
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ name, setName ] = useState<string>('')
    const router = useRouter();

    useEffect(() => {
        user && router.push('/');
    },[user])

    const emailInput = {
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu email',
        state: email,
        setState: setEmail,
    }

    const passwordInput = {
        name: 'password',
        type: 'password',
        placeholder: 'Digite sua senha',
        state: password,
        setState: setPassword,
    }

    const nameInput = {
        name: 'name',
        type: 'text',
        placeholder: 'Escreva seu nome',
        state: name,
        setState: setName,
    }

    if(sectionType == 'login') {
        return (
            <AccountContainer title="Faça seu Login">
                {error && (
                    <span>{error}</span>
                )}
                <form>
                    <Input type={emailInput.type} name={emailInput.name} placeholder={emailInput.placeholder} state={emailInput.state} setState={emailInput.setState}/>
                    <Input type={passwordInput.type} name={passwordInput.name} placeholder={passwordInput.placeholder} state={passwordInput.state} setState={passwordInput.setState}/>
                </form>
                <ButtonPrimary 
                isButtonTag={true}
                onClick={() => login(email, password)}
                >Login!
                </ButtonPrimary>
                <div className="d-flex align-items-center justify-content-between" style={{width: '100%'}}>
                    <Link className={styles.link} href="/create-account">Crie sua conta!</Link>
                    <Link className={styles.link} href="/reset-password">Esqueci a senha</Link>
                </div>

                <ButtonPrimary 
                isButtonTag={true}
                onClick={() => signInWithGoogle()}
                >Login com google!
                </ButtonPrimary>
            </AccountContainer>
        )
    } else if(sectionType == 'createAccount') {
        return (
            <AccountContainer title="Crie sua conta">
                <form>
                    <Input type={nameInput.type} name={nameInput.name} placeholder={nameInput.placeholder} state={nameInput.state} setState={nameInput.setState}/>
                    <Input type={emailInput.type} name={emailInput.name} placeholder={emailInput.placeholder} state={emailInput.state} setState={emailInput.setState}/>
                    <Input type={passwordInput.type} name={passwordInput.name} placeholder={passwordInput.placeholder} state={passwordInput.state} setState={passwordInput.setState}/>
                </form>
                <ButtonPrimary 
                isButtonTag={true}
                onClick={() => createUser(email, password, name)}
                >Criar conta!
                </ButtonPrimary>
            </AccountContainer>
        )
    } else if(sectionType == 'resetPassword') {
        return (
            <AccountContainer title="Redefina sua senha!">
                <form>
                    <Input type={emailInput.type} name={emailInput.name} placeholder={emailInput.placeholder} state={emailInput.state} setState={emailInput.setState}/>
                </form>
                <ButtonPrimary 
                isButtonTag={true}
                onClick={() => sendPasswordReset(email)}
                >Enviar email de redefinição
                </ButtonPrimary>
            </AccountContainer>
        )

    } else {
        return <div></div>
    }
}