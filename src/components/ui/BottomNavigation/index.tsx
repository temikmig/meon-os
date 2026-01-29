import clsx from "clsx";
import { type FC, type ReactNode } from "react";
import styles from "./BottomNavigation.module.css";

interface BottomNavigationProps {
  items: { label: string; icon: ReactNode }[];
}

export const BottomNavigation: FC<BottomNavigationProps> = ({ items }) => {
  return (
    <div className={clsx(styles.bottomNavigation, "liquid-glass")}>
      {items.map((item, index) => (
        <div key={index} className={styles.navItem}>
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};
