import { useCurrentTime } from "@/common/hooks";

import styles from "./Clock.module.css";

export const Clock = () => {
  const currentTime = useCurrentTime();
  return <div className={styles.clock}>{currentTime}</div>;
};
