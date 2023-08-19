'use client'

import React, {useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";
import { MobileButton } from "../MobileButton";

type TMenu = {
  scrolled: boolean;
};

export const Menu = (props: TMenu) => {
  const { scrolled } = props;
  const [mobileActive, setMobileActive] = useState(false);
  function handleClick() {
    setMobileActive(!mobileActive);
  }

  return (
    <>
      <MobileButton
        onClick={handleClick}
        scrolled={scrolled}
        mobileActive={mobileActive}
        
      />
      <nav className={`${styles.menu} ${scrolled && styles.menuWhite} ${mobileActive && styles.active}`}>
        <Link href="/sobre">Sobre</Link>
        <Link href="/conhecimentos">Conhecimentos</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contatos">Contatos</Link>
      </nav>
    </>
  );
};
