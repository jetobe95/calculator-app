import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { setToLS } from "../utils/storage";
import * as themes from '../theme/schema.json'

function MyApp({ Component, pageProps }: AppProps) {
  setToLS('all-themes', themes.default);
  return <Component {...pageProps} />
}
export default MyApp
