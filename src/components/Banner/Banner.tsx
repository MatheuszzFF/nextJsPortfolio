import Image from "next/image";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={`container ${styles.dflex}`}>
        <div className={styles.bannerLeft}>
          <h1 className={styles.title}>Olá, eu sou Matheus!</h1>
        </div>
        <Image
          className={styles.image}
          src="/photo.png"
          width={140}
          height={180}
          alt="Foto do Matheus"
          loading="lazy"
        />
        <div className={styles.bannerRight}>
          <h1 className={styles.titleRight}>Programador Front-End</h1>
        </div>
      </div>
    </div>
  );
};
