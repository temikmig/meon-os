import { useState } from "react";
import { Header } from "@/components/Header";
import styles from "./app.module.css";
import { ContactsIcon, PhoneIcon, TimePastIcon } from "@/assets/icons";
import {
  BottomNavigation,
  type BottomNavItem,
} from "@/components/ui/BottomNavigation";
import { NumberScreen } from "./NumberScreen";
import { ContactsScreen } from "./ContactsScreen";
import { HistoryScreen } from "./HistoryScreen";

type Screen = "number" | "history" | "contacts";

export const App = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>("number");

  const bottomItems: BottomNavItem<Screen>[] = [
    { id: "number", label: "Номер", icon: <PhoneIcon /> },
    { id: "history", label: "История", icon: <TimePastIcon /> },
    { id: "contacts", label: "Контакты", icon: <ContactsIcon /> },
  ];

  return (
    <>
      <Header />
      <div className={styles.appCont}>
        {activeScreen === "number" && <NumberScreen />}
        {activeScreen === "history" && <HistoryScreen />}
        {activeScreen === "contacts" && <ContactsScreen />}
        <BottomNavigation
          items={bottomItems}
          active={activeScreen}
          onChange={setActiveScreen}
        />
      </div>
    </>
  );
};
