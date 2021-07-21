import { createContext, FC, useEffect, useState } from "react";
import { Theme } from "../theme/types";
import { useTheme } from "./useTheme";

export const ChangeThemeContext = createContext<{
  theme?: Theme;
  selectedTheme?: Theme;
  themes: any;
  themeLoaded: boolean;
  setMode: (mode: Theme) => void;
}>({
  selectedTheme: undefined,
  theme: undefined,
  themes: {},
  themeLoaded: false,
  setMode: (mode) => undefined,
});

export const ChangeThemeProvider: FC<any> = ({ children }) => {
  const { theme, themes, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  return (
    <ChangeThemeContext.Provider
      value={{
        theme,
        themes,
        themeLoaded,
        setMode,
        selectedTheme,
      }}
    >
      {children}
    </ChangeThemeContext.Provider>
  );
};
