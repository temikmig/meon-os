import { BottomNavigation } from "@/components/ui/BottomNavigation";
import { ClockIcon, AlarmIcon, TimerIcon, StopwatchIcon } from "@/assets/icons";
import { Header } from "@/components/Header";
import styles from "./app.module.css";

export const App = () => {
  const navItems = [
    { label: "Часы", icon: <ClockIcon /> },
    { label: "Будильник", icon: <AlarmIcon /> },
    { label: "Таймер", icon: <TimerIcon /> },
    { label: "Секундомер", icon: <StopwatchIcon /> },
  ];

  return (
    <div className={styles.app}>
      <Header />
      <BottomNavigation items={navItems} />
    </div>
  );
};
