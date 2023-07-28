'use client'

import { Header, Logo, Menu } from "components";
import React, { useState, useEffect } from 'react'
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

    if(pathname !== '/login') {
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
            <html lang="pt-br">
                <body className={montserrat.className} style={{overflow: 'hidden'}}>
                    { children }
                </body>
            </html>
        )
    }
  
}