'use client'

import { useState } from 'react';
import { initializeApp } from "firebase/app";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, updateProfile} from "@firebase/auth";
import styles from '../login/page.module.css';
import Image from 'next/image';
import { Input } from 'components';

export default function Login() {
    const firebaseConfig = {
        apiKey: "AIzaSyB4Y1xA6gN_IisgFjeY0aIb18uOz1VE6Lk",
        authDomain: "portfolio-126c1.firebaseapp.com",
        projectId: "portfolio-126c1",
        storageBucket: "portfolio-126c1.appspot.com",
        messagingSenderId: "648589759610",
        appId: "1:648589759610:web:dc2f6ca5ac7446c711d7c3",
        measurementId: "G-V41PD4SETS"
    };

    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<any>(undefined);

    const emailInput = {
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu email',
        state: email,
        setState: setEmail
    }

    const passwordInput = {
        name: 'password',
        type: 'password',
        placeholder: 'Digite sua senha',
        state: password,
        setState: setPassword
    }

    // const nameInput = {
    //     name: 'name',
    //     type: 'text',
    //     placeholder: 'Digite seu nome',
    //     state: name,
    //     setState: setName
    // }

    const auth = getAuth()
    function createUser() {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            setUser(userCredentials.user);
            console.log(user)
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() => {
                alert('Usuário Criado')
            })
            .catch(error => alert(error))

            
            console.log(userCredentials);
            console.log(auth);

        })
        .catch(error => {
            alert(error);
        })
    }

    function login() {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            alert('Usuário Logado!');
            console.log(userCredentials)
        })
        .catch(error => alert(error));
    }

  return (
    <main className={styles.main}>
        <section>
            <div className="d-flex">
                <div className={styles.backgroundImage}>
                    <Image style={{objectFit: 'cover'}} alt="Login background" src='/images/loginBackground.jpg' fill={true}/>
                </div>
                <div className={styles.loginSection}>
                    <h2>Faça seu login!</h2>
                    <form className={styles.form}>
                        <Input type={emailInput.type} name={emailInput.name} placeholder={emailInput.placeholder} state={emailInput.state} setState={emailInput.setState}/>
                        <Input type={passwordInput.type} name={passwordInput.name} placeholder={passwordInput.placeholder} state={passwordInput.state} setState={passwordInput.setState}/>
                    </form>
                    <button onClick={() => login()}>Login!</button>
                </div>
            </div>
        </section>
        
    </main>
  )
}
