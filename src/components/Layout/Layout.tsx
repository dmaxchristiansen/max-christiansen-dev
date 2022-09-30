import GlobalStyle from "../../styles/GlobalStyle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
);

export default Layout;
