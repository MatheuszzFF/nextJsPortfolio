'use client'

import { Header, Logo, Menu } from "components";
import React, { useEffect } from 'react'
import {usePathname} from 'next/navigation';
import { Montserrat } from "next/font/google";


type TApp = {
    children: React.ReactNode
}
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-montserrat",
    });

export const App = (props: TApp) => {
    const { children } = props
    const [ scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false)
        })
    },[])

    if(pathname !== '/login' && pathname !== '/create-account' &&  pathname !== '/reset-password') {
        return (
            <>
                <Header scrolled={scrolled} >
                    <Logo scrolled={scrolled}/>
                    <Menu scrolled={scrolled}/>
                </Header>
                { children }
            </>
        )
    } else {
        return (
            <>
                { children }
            </>
        )
    }
  
}