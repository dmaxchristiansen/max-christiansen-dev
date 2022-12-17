import styled from "styled-components";
import GlobalStyle from "../../../styles/GlobalStyle";
import { ELECTRIC_PURPLE, OBSIDIAN, JELLYBEAN } from "src/styles/colors";
import Footer from "./Footer";
import Nav from "./Nav/Nav";

interface LayoutProps {
  hideNav?: boolean;
  hideFooter?: boolean;
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(${ELECTRIC_PURPLE} 0%, transparent 70%),
    linear-gradient(${OBSIDIAN} 40%, ${JELLYBEAN} 70%);
`;

interface MainProps {
  hasTopPadding: boolean;
}

const Main = styled.main<MainProps>`
  padding-top: ${({ hasTopPadding }) => (hasTopPadding ? "75px" : "0")};
`;

const Layout: React.FC<LayoutProps & React.PropsWithChildren> = ({
  hideNav,
  hideFooter,
  children,
}) => (
  <>
    <GlobalStyle />
    {!hideNav && <Nav />}
    <Background>
      <Main hasTopPadding={!hideNav}>{children}</Main>
      {!hideFooter && <Footer />}
    </Background>
  </>
);

export default Layout;
