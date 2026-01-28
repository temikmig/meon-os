import "./App.css";
import { Phone } from "@/components/Phone";
import { Screen } from "@/components/Screen";
import { useState } from "react";
import { useAppContext } from "./context/useAppContext";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [isLocked, setIsLocked] = useState(true);

  const { currentApp, setCurrentApp } = useAppContext();

  const handleLocked = () => {
    if (!isActive) {
      setIsActive(true);
      setCurrentApp(null);
      return;
    }
    if (isLocked) setIsActive(false);
    else {
      setIsLocked(true);
      setIsActive(false);
    }
  };

  return (
    <Phone lockedButton={handleLocked}>
      <Screen
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        isActive={isActive}
        currentApp={currentApp}
        setCurrentApp={setCurrentApp}
      />
    </Phone>
  );
}

export default App;
