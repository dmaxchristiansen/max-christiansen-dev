import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
);

export default Layout;
