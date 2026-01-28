import { AppIcon } from "@/components/ui/AppIcon";
import { APP_TITLE } from "./data";

import styles from "./icon.module.css";
import { useEffect, useState, type FC } from "react";

interface IconProps {
  handleOpen: () => void;
  title: boolean;
}

export const Icon: FC<IconProps> = ({ handleOpen, title }) => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds() + 1;

  const [hoursDeg, setHoursDeg] = useState(hours * 30 + minutes / 2);
  const [minutesDeg, setMinutesDeg] = useState(minutes * 6 + seconds / 10);
  const [secondsDeg, setSecondsDeg] = useState(seconds * 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsDeg(secondsDeg + 6);
      setMinutesDeg(minutesDeg + 6 / 60);
      setHoursDeg(hoursDeg + 6 / 60 / 24);
    }, 1000);

    return () => clearInterval(interval);
  }, [hoursDeg, minutesDeg, secondsDeg]);

  const styleHours = {
    transform: "rotateZ(" + hoursDeg + "deg)",
  };

  const styleMinutes = {
    transform: "rotateZ(" + minutesDeg + "deg)",
  };

  const styleSeconds = {
    transform: "rotateZ(" + secondsDeg + "deg)",
  };

  const bg = (
    <article className={styles.clock}>
      <div className={styles.clockFace}>
        <div className={styles.hours} style={styleHours}></div>
        <div className={styles.minutes} style={styleMinutes}></div>
        <div className={styles.seconds} style={styleSeconds}></div>
      </div>
    </article>
  );

  return (
    <AppIcon
      background={bg}
      title={title ? APP_TITLE : ""}
      color="#e5e5e5"
      handleOpen={handleOpen}
    />
  );
};
