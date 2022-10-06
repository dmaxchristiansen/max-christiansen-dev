import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
  hideNav?: boolean;
  headerText?: string;
  hideFooter?: boolean;
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(rgba(118, 0, 191, 0.5) 0%, transparent 70%),
    linear-gradient(#0b161e 40%, #202076 70%);
`;

interface MainProps {
  hasTopPadding: boolean;
}

const Main = styled.main<MainProps>`
  padding-top: ${({ hasTopPadding }) => (hasTopPadding ? "100px" : "0")};
`;

const Layout: React.FC<LayoutProps & React.PropsWithChildren> = ({
  hideNav,
  headerText,
  hideFooter,
  children,
}) => (
  <>
    <GlobalStyle />
    {!hideNav && <Nav />}
    <Background>
      <Main hasTopPadding={!hideNav}>
        {headerText && <Header text={headerText} />}
        {children}
      </Main>
      {!hideFooter && <Footer />}
    </Background>
  </>
);

export default Layout;
