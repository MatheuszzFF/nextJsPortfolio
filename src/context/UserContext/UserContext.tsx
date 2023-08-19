'use client'

import { initializeApp } from "firebase/app";
import {  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    getAuth, 
    updateProfile, 
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification
} from "@firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, ReactNode, useState } from 'react';
// import { TUserContext } from './type';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const UserContext = createContext<any>(null);

export const UserProvider = ({children} : { children: ReactNode } ) => {
    const router = useRouter();
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
    const auth = getAuth();
   
    const [user, setUser] = useState<any>(auth);
    const [loading, setLoading] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);


    useEffect(() => {
        try {
            auth.onAuthStateChanged((user) => {
                setUser(user);
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    function createUser(email: string, password: string, name: string) {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            if (auth.currentUser) {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {
                    setLoading(false);
                    if (auth.currentUser) {
                        sendEmailVerification(auth.currentUser)
                        .then(() => {
                            toast.success('Email de verificação enviado');
                        })
                        .then(() => {
                            router.push('/')
                        })
                        .catch(error => {
                            toast.error(error.message);

                        })
                    }
                })
                .catch(error => {
                    setError(error.message);
                })
            }
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    function login(email: string, password:string) {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            router.push('/');
            toast.success('Usuário logado!');
        })
        .catch(error => {
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                setError('Email inválido!');
            } else if(error.message === 'Firebase: Error (auth/user-not-found).'){
                setError('Usuário não encontrado');
            } else if(error.message === 'Firebase: Error (auth/wrong-password).') {
                setError('Senha incorreta');
            } else if(error.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                setError('Essa conta foi temporariamente desabilitada devido a quantidade de tentativas de login erradas.')
            } else {
                setError(error.message)
            }
        });
    }

    function logout() {
        signOut(auth)
        .then((response) =>  {
            setUser(null);
            router.push('/login')
            toast.warn('Deslogado!')
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }

    function sendPasswordReset(email: string) {
        sendPasswordResetEmail(auth, email)
        .then(response => {
            toast.success('O email de reset de senha foi enviado para sua caixa de entrada!')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const userActions = {
        login,
        user: user,
        loading,
        logout,
        createUser,
        error,
        sendPasswordReset,
    }

    return (
        <UserContext.Provider 
        value={userActions}
        >
            <ToastContainer/>

            {children}
        </UserContext.Provider>
    )

}