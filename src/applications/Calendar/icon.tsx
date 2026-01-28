import { AppIcon } from "@/components/ui/AppIcon";
import { APP_TITLE } from "./data";
import { useCurrentDate } from "@/common/hooks";

import styles from "./icon.module.css";
import type { FC } from "react";

interface IconProps {
  handleOpen: () => void;
  title: boolean;
}

export const Icon: FC<IconProps> = ({ handleOpen, title }) => {
  const { day, weekdayShort } = useCurrentDate();

  const bg = (
    <div className={styles.icon}>
      <div className={styles.weekday}>{weekdayShort}</div>
      <div className={styles.day}>{day}</div>
    </div>
  );
  return (
    <AppIcon
      background={bg}
      title={title ? APP_TITLE : ""}
      color="#fff"
      handleOpen={handleOpen}
    />
  );
};
