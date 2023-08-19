import styles from "./button.module.css";
import { TButton } from "./type";

export const Button = (props: TButton) => {
  const { 
    src, 
    isBgPrimary,
    btnChildren,
    icon,
  } = props;
  return (
    <a
      href={src}
      className={`${styles.button} ${isBgPrimary && styles.bgPrimaryColor}`}
      style={
        icon ? {
          backgroundImage: `url(${icon})`,
          backgroundSize: `18px`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `92% center`,
          paddingRight: '40px',
        } : undefined
      }
    >
      {btnChildren}
    </a>
  );
};
