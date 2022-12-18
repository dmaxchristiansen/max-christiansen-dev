import { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { HOT_PINK, BLUE_EYES, ROYAL_BLUE } from "src/styles/colors";
import {
  TEN_THOUSAND,
  ONE_THOUSAND,
  TWO_THOUSAND,
  THREE_THOUSAND,
} from "src/utils/constants/transition-speeds";
import {
  WHEEL_SPIN_KEYFRAMES,
  BLUE_SHADOW_AND_TEXT_GLOW_KEYFRAMES,
} from "src/utils/constants/animation-constants";
import {
  NARROW_PINK_GLOW,
  DARK_SHADOW,
} from "src/utils/constants/shadow-constants";
import reactLogo from "src/images/reactLogo.svg";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0 0 40px;
  font-size: 80px;
  @media (max-width: 991px) {
    font-size: 70px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const TopLine = styled.p`
  margin: 0;
  font-size: 30px;
`;

const MidLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReactImg = styled.img`
  height: 50px;
  pointer-events: none;
  animation: ${WHEEL_SPIN_KEYFRAMES} infinite ${TEN_THOUSAND} linear;
`;

const MidLine = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: 900;
  text-shadow: 0 0 16px ${BLUE_EYES}, 0 0 18px ${BLUE_EYES};
  span {
    margin-right: 10px;
  }
  span:last-child {
    margin-right: 0;
  }
`;

const BottomLine = styled.p`
  margin: 0;
  font-size: 30px;
`;

const LinksContainer = styled.div`
  display: inline-block;
  margin-top: 42px;
  a {
    &:nth-child(2) {
      animation-delay: ${ONE_THOUSAND};
    }
    &:nth-child(3) {
      animation-delay: ${TWO_THOUSAND};
    }
  }
`;

interface AnimationProps {
  isAnimated: boolean;
}

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["isAnimated"].includes(prop),
})<AnimationProps>`
  display: block;
  background-color: ${ROYAL_BLUE};
  border-radius: 16px;
  text-decoration: none;
  box-shadow: ${DARK_SHADOW};
  &:hover {
    box-shadow: ${NARROW_PINK_GLOW};
  }
  ${({ isAnimated }) =>
    isAnimated
      ? css`
          animation: ${BLUE_SHADOW_AND_TEXT_GLOW_KEYFRAMES} ${THREE_THOUSAND};
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-fill-mode: both;
        `
      : css`
          animation: none;
        `}
`;

const LinkContent = styled.div`
  margin-bottom: 30px;
  padding: 16px 28px;
  border-radius: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 30px;
  &:hover {
    color: ${HOT_PINK};
  }
`;

// TODO: Add DataVisualizer component
// SEE: https://github.com/dmaxchristiansen/max-christiansen-dev/issues/14

const ComponentsPage = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <Layout>
      <Container>
        <Header>Custom Components</Header>
        <TopLine>Written in...</TopLine>
        <MidLineWrapper>
          <ReactImg src={reactLogo} alt="React logo" />
          <MidLine>
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </MidLine>
          <ReactImg src={reactLogo} alt="React logo" />
        </MidLineWrapper>
        <BottomLine>...with no dependencies</BottomLine>
        <LinksContainer>
          <StyledLink
            to="/showcase/components/video-carousel"
            isAnimated={isAnimated}
          >
            <LinkContent
              onMouseOver={() => setIsAnimated(false)}
              onMouseLeave={() => setIsAnimated(true)}
            >
              VIDEO CAROUSEL
            </LinkContent>
          </StyledLink>
          <StyledLink to="/showcase/components/marquee" isAnimated={isAnimated}>
            <LinkContent
              onMouseOver={() => setIsAnimated(false)}
              onMouseLeave={() => setIsAnimated(true)}
            >
              MARQUEE
            </LinkContent>
          </StyledLink>
          <StyledLink to="#" isAnimated={isAnimated}>
            <LinkContent
              onMouseOver={() => setIsAnimated(false)}
              onMouseLeave={() => setIsAnimated(true)}
            >
              COMING SOON
            </LinkContent>
          </StyledLink>
        </LinksContainer>
      </Container>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Components"
    description="React components built in Gatsby"
    pathname="/showcase/components"
  />
);

export default ComponentsPage;
