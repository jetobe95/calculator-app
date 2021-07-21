import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/theme";
import NumericKeypad from "../components/Keypad/NumericKeypad/NumericKeypad";
import Panel from "../components/Panel/Panel";
const Container = styled.div`
  margin: 5px auto 5px auto;
`;


export default function Home() {

  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme?.font }}>
            <Panel/>
            <NumericKeypad/>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
