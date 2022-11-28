import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/globals';
import theme from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}