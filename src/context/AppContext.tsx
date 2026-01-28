import { createContext, type ReactNode } from "react";

export interface AppContextState {
  currentApp: ReactNode;
  setCurrentApp: (app: ReactNode) => void;
}

export const AppContext = createContext<AppContextState | null>(null);
