import { ChangeThemeContext } from "./ChangeThemeContext";
import { useContext, } from "react";

export const useChangeTheme = () => {
  const { theme, themes, themeLoaded, setMode,selectedTheme } =
    useContext(ChangeThemeContext);

  return { theme, themes, themeLoaded, setMode,selectedTheme };
};
