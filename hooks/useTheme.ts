import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/storage";
import _ from "lodash";
import { Theme } from "../theme/types";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState<Theme>(themes?.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: Theme) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    let isLightTheme = false;
    if (typeof window != "undefined") {
      isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    }
    localTheme
      ? setTheme(localTheme)
      : setTheme(isLightTheme ? themes.data.light : themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themes, themeLoaded, setMode, getFonts };
};
