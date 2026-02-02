import {
  BottomNavigation,
  type BottomNavItem,
} from "@/components/ui/BottomNavigation";
import { ClockIcon, AlarmIcon, TimerIcon, StopwatchIcon } from "@/assets/icons";
import { Header } from "@/components/Header";
import { useState } from "react";
import { AlarmScreen } from "./AlarmScreen";
import { ClockScreen } from "./ClockScreen";
import { StopwatchScreen } from "./StopwatchScreen";
import { TimerScreen } from "./TimerScreen";

import styles from "./app.module.css";

type Screen = "clock" | "alarm" | "timer" | "stopwatch";

export const App = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>("clock");

  const bottomItems: BottomNavItem<Screen>[] = [
    { id: "clock", label: "Часы", icon: <ClockIcon /> },
    { id: "alarm", label: "Будильник", icon: <AlarmIcon /> },
    { id: "timer", label: "Таймер", icon: <TimerIcon /> },
    { id: "stopwatch", label: "Секундомер", icon: <StopwatchIcon /> },
  ];

  return (
    <>
      <Header />
      <div className={styles.appCont}>
        {activeScreen === "clock" && <ClockScreen />}
        {activeScreen === "alarm" && <AlarmScreen />}
        {activeScreen === "timer" && <TimerScreen />}
        {activeScreen === "stopwatch" && <StopwatchScreen />}
        <BottomNavigation
          items={bottomItems}
          active={activeScreen}
          onChange={setActiveScreen}
        />
      </div>
    </>
  );
};
