import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
    font-family: Exo, sans-serif;
    color: #ffffff;
  }
  
  html {
    box-sizing: border-box;
    font-family: Exo, sans-serif;
    color: #ffffff;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
