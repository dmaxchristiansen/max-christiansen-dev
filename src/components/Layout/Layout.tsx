import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import ButtonLink from "src/components/ButtonLink/ButtonLink";

interface LayoutProps {
  hideNav?: boolean;
  headerText?: string;
  hideFooter?: boolean;
  hasBackButton?: boolean;
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(rgba(118, 0, 191, 0.5) 0%, transparent 70%),
    linear-gradient(#0b161e 40%, #202076 70%);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

interface MainProps {
  hasTopPadding: boolean;
}

const Main = styled.main<MainProps>`
  padding-top: ${({ hasTopPadding }) => (hasTopPadding ? "75px" : "0")};
`;

const Layout: React.FC<LayoutProps & React.PropsWithChildren> = ({
  hideNav,
  headerText,
  hideFooter,
  hasBackButton,
  children,
}) => (
  <>
    <GlobalStyle />
    {!hideNav && <Nav />}
    <Background>
      <Main hasTopPadding={!hideNav}>
        {hasBackButton && (
          <ButtonWrapper>
            <ButtonLink
              href="/frontend-showcase/components"
              text="back to components"
              fontSize="14px"
              py="5px"
              px="10px"
            />
          </ButtonWrapper>
        )}
        {headerText && <Header text={headerText} />}
        {children}
        {hasBackButton && (
          <ButtonWrapper>
            <ButtonLink
              href="/frontend-showcase/components"
              text="back to components"
              fontSize="14px"
              py="6px"
              px="10px"
            />
          </ButtonWrapper>
        )}
      </Main>
      {!hideFooter && <Footer />}
    </Background>
  </>
);

export default Layout;
