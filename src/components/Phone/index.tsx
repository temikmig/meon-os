import type { ReactNode } from "react";
import cursor from "@/assets/cursor.png";

import styles from "./Phone.module.css";

interface PhoneProps {
  children?: ReactNode;
  lockedButton: () => void;
}

export const Phone = ({ children, lockedButton }: PhoneProps) => {
  return (
    <>
      <div className={styles.phone}>
        <div className={styles.lockedButton} onClick={lockedButton} />
        <div className={styles.cutout}>
          <div className={styles.camera}></div>
        </div>
        <div
          className={styles.screen}
          style={{ cursor: `url(${cursor}) 12 12, auto` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
