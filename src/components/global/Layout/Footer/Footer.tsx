import styled, { css } from "styled-components";
import { BLUE_EYES, WHITE } from "src/utils/constants/colors";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import {
  STANDARD_X_PADDING,
  STANDARD_WIDTH,
} from "src/utils/constants/layouts";
import GitHubSvg from "src/components/svgs/GitHubSvg/GitHubSvg";
import NewTabLinkSvg from "src/components/svgs/NewTabLinkSvg/NewTabLinkSvg";
import LinkedInSvg from "src/components/svgs/LinkedInSvg/LinkedInSvg";
import ResumeSvg from "src/components/svgs/ResumeSvg/ResumeSvg";

const Container = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 60px;
`;

const ExternalWrapper = styled.div`
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
  padding: ${STANDARD_X_PADDING};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid ${BLUE_EYES};
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  @media (max-width: 767px) {
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
  div {
    transition: color ${TWO_FIFTY_MS};
  }
  svg {
    transition: fill ${TWO_FIFTY_MS};
  }
  &:hover {
    @media (min-width: 992px) {
      svg {
        fill: ${BLUE_EYES};
      }
      div {
        color: ${BLUE_EYES};
      }
    }
  }
  @media (max-width: 991px) {
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 767px) {
    margin: 0 0 20px 0;
  }
`;

const SharedTypographyStyles = css`
  font-family: Roboto Mono;
  font-size: 20px;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const LinkText = styled.div`
  display: flex;
  margin: 0 6px;
  ${SharedTypographyStyles}
`;

const Text = styled.div`
  display: flex;
  text-align: right;
  ${SharedTypographyStyles}
`;

const Footer: React.FC = () => (
  <Container data-cy="footer">
    <ExternalWrapper>
      <Row>
        <LinksWrapper>
          <Link
            href="https://github.com/dmaxchristiansen"
            target="_blank"
            rel="noreferrer"
            data-cy="footerGithubLink"
          >
            <GitHubSvg />
            <LinkText>dmaxchristiansen</LinkText>
            <NewTabLinkSvg fillColor={WHITE} height={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dmaxdev/"
            target="_blank"
            rel="noreferrer"
            data-cy="footerLinkedInLink"
          >
            <LinkedInSvg />
            <LinkText>dmaxdev</LinkText>
            <NewTabLinkSvg fillColor={WHITE} height={18} />
          </Link>
          <Link
            href="/max_christiansen_resume_spring_2023.pdf"
            target="_blank"
            data-cy="footerResumeLink"
          >
            <ResumeSvg />
            <LinkText>resume</LinkText>
            <NewTabLinkSvg fillColor={WHITE} height={18} />
          </Link>
        </LinksWrapper>
        <Text>©{new Date().getFullYear()}</Text>
      </Row>
    </ExternalWrapper>
  </Container>
);

export default Footer;
