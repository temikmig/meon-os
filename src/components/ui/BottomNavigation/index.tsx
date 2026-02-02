import clsx from "clsx";
import { useState, type ReactNode } from "react";
import styles from "./BottomNavigation.module.css";

export interface BottomNavItem<T extends string> {
  id: T;
  label: string;
  icon: ReactNode;
}

interface BottomNavigationProps<T extends string> {
  items: BottomNavItem<T>[];
  active: T;
  onChange: (id: T) => void;
}

export const BottomNavigation = <T extends string>({
  items,
  active,
  onChange,
}: BottomNavigationProps<T>) => {
  const activeIndex = items.findIndex((i) => i.id === active);

  const [hovered, setHovered] = useState<T | null>(null);

  return (
    <div className={clsx(styles.bottomNavigation, "liquid-glass")}>
      <div
        className={styles.activeIndicator}
        style={{
          width: `calc((100% - 8px) / ${items.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onChange(item.id)}
          className={clsx(
            hovered === item.id && "liquid-glass",
            hovered === item.id && styles.hovered,
            styles.navItem,
            item.id === active && styles.active,
          )}
          onPointerDown={() => setHovered(item.id)}
          onPointerUp={() => setHovered(null)}
        >
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};
