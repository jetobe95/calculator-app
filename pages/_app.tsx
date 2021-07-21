import "../styles/globals.css";
import type { AppProps } from "next/app";
import { setToLS } from "../utils/storage";
import * as themes from "../theme/schema.json";
import { ChangeThemeProvider } from "../hooks/ChangeThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  setToLS("all-themes", themes.default);
  return (
    <ChangeThemeProvider>
      <Component {...pageProps} />
    </ChangeThemeProvider>
  );
}
export default MyApp;
