"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { TTabs } from "./type";
import { Button } from "components/ui/Button";

export const Tab = (props: TTabs) => {
  const [tabActive, setTabActive] = useState(0);

  function toggleTabs(index: number) {
    setTabActive(index);
  }
  const buttonSettings = {
    isBgPrimary: false,
    children: "Download CV",
    icon: '/cvIcon.png'
  };

  const {
    title,
    isWithImage,
    iconWithBorders,
    backgroundBlack,
    cvButton,
    contents,
  } = props;
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.boxes}>
          <div className={styles.dualBoxes}>
            {isWithImage ? (
              <Image
                src="/biggerImage.png"
                width={300}
                height={400}
                alt="Author Image"
              />
            ) : (
              <div className="content">
                {contents.map((item, index) => {
                  return (
                    <div
                      className={`${styles.tabContent} ${
                        tabActive == index && styles.contentActive
                      }`}
                      key={item.name + index + 3}
                    >
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={styles.dualBoxes}>
            <nav className={styles.tabNav}>
              <ul className={styles.tabMenu}>
                {contents.map((item, index) => {
                  return (
                    <li
                      className={`tab ${tabActive == index && styles.tabActive}
                        ${styles.tab} ${
                        backgroundBlack && styles.backgroundBlack
                      }`}
                      onClick={(e) => {
                        setTabActive(index);
                      }}
                      key={item.name + index}
                    >
                      <Image
                        src={item.icon}
                        width={backgroundBlack ? 90 : 45}
                        height={backgroundBlack ? 80 : 45}
                        alt="Icon Alt"
                      />
                      {iconWithBorders && <p>{item.name}</p>}
                    </li>
                  );
                })}
              </ul>
            </nav>
            {isWithImage && (
              <div className="content">
                {contents.map((item, index) => {
                  return (
                    <div
                      className={`${styles.tabContent} ${
                        tabActive == index && styles.contentActive
                      }`}
                      key={item.name + index + index}
                    >
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {cvButton && (
              <Button
                src="/teste"
                isBgPrimary={buttonSettings.isBgPrimary}
                btnChildren={buttonSettings.children}
                icon={buttonSettings.icon}
              />
             
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
