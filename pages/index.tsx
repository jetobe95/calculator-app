import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/theme";
import NumericKeypad from "../components/Keypad/NumericKeypad/NumericKeypad";
import Panel from "../components/Panel/Panel";
import Header from "../components/Header/Header";
import { useChangeTheme } from "../hooks/useChangeTheme";
import Footer from "../components/Footer/Footer";
const Container = styled.div`
  margin: 5px auto 5px auto;
`;
const SizedBox = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

export default function Home() {
  const { themeLoaded, selectedTheme } = useChangeTheme();
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme?.font }}>
            <Header />
            <SizedBox height="30px" />
            <Panel />
            <SizedBox height="24px" />
            <NumericKeypad />
            <SizedBox height="1rem" />
            <Footer/>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
