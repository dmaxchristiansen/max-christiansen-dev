import GlobalStyle from "../../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  headerText?: string;
}

const Layout: React.FC<LayoutProps & React.PropsWithChildren> = ({
  headerText,
  children,
}) => (
  <>
    <GlobalStyle />
    {headerText && <Header text={headerText} />}
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
