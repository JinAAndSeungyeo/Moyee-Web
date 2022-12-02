import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import { fonts } from 'styles/fonts';

const GlobalStyle = css`
  ${emotionReset};
  
  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: ${fonts.pretendard.REGULAR};
    color: ${theme.colors.text001};
  }
  body {
    margin: 0;
    overflow: auto;
    min-height: 100vh;
    background-color: ${theme.colors.background500};
  }
  a {
    color: inherit;
    padding: 0;
    text-decoration: none;
  }
  input,
  button,
  textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ul,
  li {
    list-style: none;
  }
  #__next {
    height: 100vh;
  }
`;

export default GlobalStyle;
