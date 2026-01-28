import type { FC, ReactNode } from "react";
import styles from "./AppIcon.module.css";

interface AppIconProps {
  title?: string;
  color?: string;
  background?: ReactNode;
  handleOpen?: () => void;
}

export const AppIcon: FC<AppIconProps> = ({
  title,
  color,
  background,
  handleOpen,
}) => {
  return (
    <div className={styles.appCont} onClick={handleOpen}>
      <div className={styles.appIcon} style={{ backgroundColor: color }}>
        {background}
      </div>
      {title && <div className={styles.appTitle}>{title}</div>}
    </div>
  );
};
