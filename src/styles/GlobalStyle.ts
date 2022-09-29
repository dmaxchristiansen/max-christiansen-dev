import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
    font-family: Roboto, sans-serif;
  }

  html {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
