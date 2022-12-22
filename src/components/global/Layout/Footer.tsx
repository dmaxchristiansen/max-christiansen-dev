import styled from "styled-components";
import { BLUE_EYES, WHITE } from "src/styles/colors";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import { TWO_FIFTY_MS } from "src/utils/constants/transition-speeds";
import GitHubSvg from "src/components/svgs/GitHubSvg";
import NewTabLinkSvg from "src/components/svgs/NewTabLinkSvg";
import LinkedInSvg from "src/components/svgs/LinkedInSvg";

const Container = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1290px;
  margin: 0 auto;
  padding: 20px 30px;
  border-top: 1px solid ${BLUE_EYES};
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 50px;
  text-decoration: none;
  transition: opacity ${TWO_FIFTY_MS};
  &:hover {
    opacity: ${OPACITY_FADE};
  }
  @media (max-width: 991px) {
    margin-bottom: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 520px) {
    margin-right: 0;
  }
`;

const LinkText = styled.div`
  display: flex;
  margin: 0 6px;
  line-height: 1;
  font-size: 20px;
  font-family: Roboto Mono;
`;

const Text = styled.div`
  display: flex;
  line-height: 1;
  font-family: Roboto Mono;
  font-size: 20px;
  @media (max-width: 520px) {
    display: none;
  }
`;

const MobileText = styled.div`
  display: none;
  @media (max-width: 520px) {
    display: block;
    text-align: center;
    // line-height: 1;
    font-family: Roboto Mono;
    font-size: 20px;
  }
`;

const Footer: React.FC = () => (
  <Container>
    <Wrapper>
      <LinksWrapper>
        <Link
          href="https://github.com/dmaxchristiansen"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubSvg />
          <LinkText>dmaxchristiansen</LinkText>
          <NewTabLinkSvg fillColor={WHITE} height={18} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dmaxdev/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInSvg />
          <LinkText>dmaxdev</LinkText>
          <NewTabLinkSvg fillColor={WHITE} height={18} />
        </Link>
      </LinksWrapper>
      <Text>© Daniel Max Christiansen&nbsp;{new Date().getFullYear()}</Text>
      <MobileText>
        Daniel Max
        <br />
        Christiansen
        <br />
        ©&nbsp;{new Date().getFullYear()}
      </MobileText>
    </Wrapper>
  </Container>
);

export default Footer;
