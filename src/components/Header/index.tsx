import styles from "./Header.module.css";
import { Clock } from "./Clock";
import { Battery } from "./Battery";
import { Island } from "./Island";
import { Wifi } from "./Wifi";
import { Connection } from "./Connection";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Island />
      <div className={styles.icons}>
        <Connection />
        <Wifi />
        <Battery />
        <Clock />
      </div>
    </div>
  );
};
