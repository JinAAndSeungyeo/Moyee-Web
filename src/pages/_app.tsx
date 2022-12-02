import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app'
import GlobalStyle from 'styles/globals';
import { RecoilRoot } from 'recoil';
import Header from 'components/Common/Template/Header';
import MaxWidth from 'components/Common/Layout/MaxWidth';
import Head from 'next/head';
import { theme } from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=deveice-width, initial-scale=1' />
        <link rel='shortcut icon' href='/icons/favicon/favicon.ico' />
        <title>moyee: 덕질 친구를 찾아서</title>
      </Head>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Header />
          <MaxWidth>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
          </MaxWidth>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}