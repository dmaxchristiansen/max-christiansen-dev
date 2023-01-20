import { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { HOT_PINK, BLUE_EYES, ROYAL_BLUE } from "src/utils/constants/colors";
import {
  TEN_THOUSAND_MS,
  ONE_THOUSAND_MS,
  TWO_THOUSAND_MS,
  THREE_THOUSAND_MS,
} from "src/utils/constants/transitions";
import {
  WHEEL_SPIN_KEYFRAMES,
  BLUE_SHADOW_AND_TEXT_GLOW_KEYFRAMES,
} from "src/utils/constants/animations";
import { NARROW_PINK_GLOW, DARK_SHADOW } from "src/utils/constants/shadows";
import {
  STANDARD_WIDTH,
  STANDARD_X_PADDING,
} from "src/utils/constants/layouts";
import reactLogo from "src/images/reactLogo.svg";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";

const linksConfig = [
  { label: "VIDEO CAROUSEL", href: "/showcase/components/video-carousel" },
  { label: "MARQUEE", href: "/showcase/components/marquee" },
  { label: "DATA VISUALIZER", href: "/showcase/components/data-visualizer" },
];

const Container = styled.div`
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
  padding: ${STANDARD_X_PADDING};
  text-align: center;
`;

const Header = styled.h1`
  margin: 0 0 40px;
  font-size: 80px;
  line-height: 1.2;
  @media (max-width: 991px) {
    font-size: 70px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const SharedTypographyStyles = css`
  margin: 0;
  font-size: 30px;
  @media (max-width: 520px) {
    font-size: 24px;
  }
`;

const TopLine = styled.p`
  ${SharedTypographyStyles}
`;

const MidLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReactImg = styled.img`
  height: 50px;
  pointer-events: none;
  animation: ${WHEEL_SPIN_KEYFRAMES} infinite ${TEN_THOUSAND_MS} linear;
  @media (max-width: 520px) {
    height: 46px;
  }
`;

const MidLine = styled.p`
  margin: 10px 0;
  font-size: 50px;
  line-height: 1;
  font-weight: 900;
  text-shadow: 0 0 16px ${BLUE_EYES}, 0 0 18px ${BLUE_EYES};
  span {
    margin-right: 10px;
  }
  span:last-child {
    margin-right: 0;
  }
  @media (max-width: 520px) {
    font-size: 46px;
  }
`;

const BottomLine = styled.p`
  ${SharedTypographyStyles}
`;

const LinksContainer = styled.div`
  display: inline-block;
  margin-top: 42px;
  a {
    &:nth-child(2) {
      animation-delay: ${ONE_THOUSAND_MS};
    }
    &:nth-child(3) {
      animation-delay: ${TWO_THOUSAND_MS};
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
  ${({ isAnimated }) =>
    isAnimated
      ? css`
          animation: ${BLUE_SHADOW_AND_TEXT_GLOW_KEYFRAMES} ${THREE_THOUSAND_MS};
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-fill-mode: both;
          @media (max-width: 991px) {
            animation: none;
          }
        `
      : css`
          animation: none;
        `}
  &:hover {
    @media (min-width: 992px) {
      box-shadow: ${NARROW_PINK_GLOW};
    }
  }
`;

const LinkContent = styled.div`
  margin-bottom: 30px;
  padding: 16px 28px;
  border-radius: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 30px;
  line-height: 1;
  &:hover {
    @media (min-width: 992px) {
      color: ${HOT_PINK};
    }
  }
  @media (max-width: 991px) {
    margin-bottom: 20px;
    padding: 14px 20px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 24px;
  }
`;

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
          {linksConfig.map(link => (
            <StyledLink key={link.label} to={link.href} isAnimated={isAnimated}>
              <LinkContent
                onMouseOver={() => setIsAnimated(false)}
                onMouseLeave={() => setIsAnimated(true)}
              >
                {link.label}
              </LinkContent>
            </StyledLink>
          ))}
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
