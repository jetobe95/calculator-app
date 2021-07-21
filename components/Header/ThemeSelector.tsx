import { useEffect, useState } from "react";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { useTheme } from "../../hooks/useTheme";
import { getFromLS } from "../../utils/storage";
import { ThemeTitle, _ThemeSelector } from "./styledComponents";

export default function ThemeSelector() {
  const themesFromStore = getFromLS("all-themes");
  const [data] = useState(themesFromStore.data);
  const [themes, setThemes] = useState<string[]>([]);
  const { setMode,selectedTheme } = useChangeTheme();
  useEffect(() => {
    setThemes(Object.keys(data));
  }, [data]);
  console.log(selectedTheme?.id)
  return (
    <_ThemeSelector>
      <ThemeTitle>THEME</ThemeTitle>
      <select onChange={(e)=>setMode(data[e.target.value])}>
        {themes.map((theme) => (
          <option  key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </_ThemeSelector>
  );
}
