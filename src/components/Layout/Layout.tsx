import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { ELECTRIC_PURPLE, OBSIDIAN, JELLYBEAN } from "src/styles/colors";
import ComponentHeader from "./ComponentHeader";
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
  background: radial-gradient(${ELECTRIC_PURPLE} 0%, transparent 70%),
    linear-gradient(${OBSIDIAN} 40%, ${JELLYBEAN} 70%);
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
              href="/showcase/components"
              text="back to components"
              fontSize="14px"
              py="5px"
              px="10px"
            />
          </ButtonWrapper>
        )}
        {headerText && <ComponentHeader text={headerText} />}
        {children}
        {hasBackButton && (
          <ButtonWrapper>
            <ButtonLink
              href="/showcase/components"
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
