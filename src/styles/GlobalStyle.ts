import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
    font-family: Exo, sans-serif;
  }

  html {
    box-sizing: border-box;
    font-family: Exo, sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
