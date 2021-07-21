import { useEffect, useState } from "react";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { Theme } from "../../theme/types";
import { getFromLS } from "../../utils/storage";
import {
  ThemeTitle,
  _ThemeSelector,
  ThemeToggle,
  ThemeToggleIndicator,
  SizedBox,
} from "./styledComponents";

export default function ThemeSelector() {
  const themesFromStore = getFromLS("all-themes");
  const [data] = useState(themesFromStore.data);
  const [themes, setThemes] = useState<[string, Theme][]>();
  const { setMode, selectedTheme } = useChangeTheme();
  useEffect(() => {
    setThemes(Object.entries(data));
  }, [data]);
  return (
    <_ThemeSelector>
      <ThemeTitle>THEME</ThemeTitle>
      <SizedBox/>
      <ThemeToggle>
        {themes?.map(([_, themeData], index) => (
          <ThemeToggleIndicator
            onClick={()=>setMode(themeData)}
            key={themeData.id}
            counter={`${index + 1}`}
            enabled={selectedTheme?.id === themeData.id}
          />
        ))}
      </ThemeToggle>
    </_ThemeSelector>
  );
}
