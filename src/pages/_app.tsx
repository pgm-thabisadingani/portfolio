import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../styles/globals.scss';
import '../styles/keyframes.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
