import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';
import { theme } from 'styles/theme';

const GlobalStyle = css`
  ${emotionReset};
  
  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
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
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    color: ${theme.colors.text001};
  }
  p {
    font-size: 14px;
  }
  #__next {
    height: 100vh;
  }
`;

export default GlobalStyle;
