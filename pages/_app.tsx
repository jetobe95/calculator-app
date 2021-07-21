import "../styles/globals.css";
import type { AppProps } from "next/app";
import { setToLS } from "../utils/storage";
import * as themes from "../theme/schema.json";
import { ChangeThemeProvider } from "../hooks/ChangeThemeContext";
import { CalculatorProvider } from "../hooks/calculator/CalculatorContext";

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  setToLS("all-themes", themes.default);
  return (
    <ChangeThemeProvider>
      <CalculatorProvider>
        <Component {...pageProps} />
      </CalculatorProvider>
    </ChangeThemeProvider>
  );
}
export default MyApp;
