import styles from "./Header.module.css";
import { HeaderTop } from 'components';

type THeader = {
  children: React.ReactNode;
  scrolled: boolean
};
export const Header = (props: THeader) => {
  const { children, scrolled } = props;

  return (
    <header className={`${styles.header} ${scrolled && styles.primaryColor}`}>
      <HeaderTop/>
      <div className={styles.flex + " container"}>{children}</div>
    </header>
  );
};
