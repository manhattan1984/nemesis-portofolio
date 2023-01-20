"use client";
import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  dark: false,
  setDark: (dark) => {},
});

export function ColorModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const contextValue = {
    darkMode,
    setDarkMode,
  };

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;