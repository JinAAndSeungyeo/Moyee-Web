import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globals';

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>,
  document.querySelector('#app'),
);