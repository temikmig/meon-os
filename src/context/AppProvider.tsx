import { type ReactNode, useMemo, useState } from "react";
import { AppContext } from "./AppContext";

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [currentApp, setCurrentApp] = useState<React.ReactNode>(null);

  const value = useMemo(
    () => ({
      currentApp,
      setCurrentApp,
    }),
    [currentApp, setCurrentApp],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
