import { useCurrentTime, useCurrentDate } from "@/common/hooks";
import styles from "./Lockscreen.module.css";
import type { FC } from "react";

interface LockscreenProps {
  setIsLocked: (v: boolean) => void;
}

export const Lockscreen: FC<LockscreenProps> = ({ setIsLocked }) => {
  const currentTime = useCurrentTime();
  const { date, weekday } = useCurrentDate();

  return (
    <div className={styles.lockscreen}>
      <div className={styles.time}>{currentTime}</div>
      <div className={styles.date}>
        {weekday}, {date}
      </div>
      <div className={styles.unlockHint} onClick={() => setIsLocked(false)}>
        Разблокировать
      </div>
    </div>
  );
};
