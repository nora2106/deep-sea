import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a:hover,
  button:hover,
  body {
    cursor: none;
  }

  *, html {
    scroll-behavior: smooth !important;
  }
`;

export default GlobalStyle;