import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  FOUR_FIFTY_MS,
  ONE_THOUSAND_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { BLUE_EYES, WHITE } from "src/styles/colors";
import useHandleWindowResize, {
  isLessThanWidthThreshold,
} from "src/utils/hooks/useHandleWindowResize";
import GitHubSvg from "src/components/svgs/GitHubSvg";
import LinkedInSvg from "src/components/svgs/LinkedInSvg";
import ResumeSvg from "src/components/svgs/ResumeSvg";
import NewTabLinkSvg from "src/components/svgs/NewTabLinkSvg";

const Container = styled.div<InViewProps>`
  margin: 60px 0 100px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${ONE_THOUSAND_MS};
  @media (max-width: 520px) {
    margin: 30px 0 60px;
  }
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 40px;
  text-decoration: none;
  div {
    transition: color ${TWO_FIFTY_MS};
  }
  svg {
    transition: fill ${TWO_FIFTY_MS};
  }
  &:hover {
    svg {
      fill: ${BLUE_EYES};
    }
    div {
      color: ${BLUE_EYES};
    }
  }
`;

const LinkText = styled.div`
  margin: 0 15px;
  font-family: Roboto Mono;
  font-size: 30px;
  line-height: 1;
  @media (max-width: 520px) {
    margin: 0 12px;
    font-size: 20px;
  }
`;

const SocialMedia: React.FC<InViewProps> = ({ inView }) => {
  const isMobile = useHandleWindowResize(isLessThanWidthThreshold(520));

  console.log(isMobile);

  return (
    <Container inView={inView}>
      <div>
        <Link href="#" target="_blank">
          <ResumeSvg height={isMobile ? 50 : 60} />
          <LinkText>resume download</LinkText>
          <NewTabLinkSvg fillColor={WHITE} height={isMobile ? 18 : 25} />
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/dmaxchristiansen"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubSvg height={isMobile ? 50 : 60} />
          <LinkText>dmaxchristiansen</LinkText>
          <NewTabLinkSvg fillColor={WHITE} height={isMobile ? 18 : 25} />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/dmaxdev/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInSvg height={isMobile ? 50 : 60} />
          <LinkText>dmaxdev</LinkText>
          <NewTabLinkSvg fillColor={WHITE} height={isMobile ? 18 : 25} />
        </Link>
      </div>
    </Container>
  );
};

export default SocialMedia;
