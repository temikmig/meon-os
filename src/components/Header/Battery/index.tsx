import { useBattery } from "react-use";
import clsx from "clsx";

import styles from "./Battery.module.css";

export const Battery = () => {
  const battery = useBattery();

  if (battery.isSupported && battery.fetched)
    return (
      <div className={styles.batteryCont}>
        <div className={styles.batteryContInside}>
          <div
            className={clsx(
              styles.batteryContFill,
              battery.level < 0.2 && styles.batteryContFillRed,
              battery.charging && styles.batteryContFillGreen,
            )}
            style={{
              width: (battery.level > 0.1 ? battery.level * 100 : 10) + "%",
            }}
          />
        </div>
        <div className={styles.batteryWrap}>{(battery.level * 100) | 0}%</div>
      </div>
    );
};
