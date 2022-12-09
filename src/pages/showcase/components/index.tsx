import { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { HOT_PINK, BLUE_SKY } from "src/styles/colors";
import { SLOW, TURTLE } from "src/utils/constants/transition-speeds";
import { TEXT_GLOW_KEYFRAMES } from "src/utils/constants/animation-constants";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import SpinningOtter from "src/components/SpinningOtter/SpinningOtter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SHARED_HEADER_STYLES = css`
  margin: 0 0 32px;
  text-align: center;
  font-family: "Mr Dafoe";
  font-size: 120px;
  text-shadow: 0 0 16px ${HOT_PINK}, 0 0 18px ${HOT_PINK};
  animation: ${TEXT_GLOW_KEYFRAMES} ${TURTLE};
  animation-iteration-count: infinite;
  transition: color ${SLOW};
  &:hover {
    color: ${BLUE_SKY};
  }
  @media (max-width: 991px) {
    margin: 0 0 75px;
    font-size: 80px;
    line-height: 1;
  }
`;

interface HeaderProps {
  isAnimated: boolean;
}

const VideoCarouselHeader = styled.h1<HeaderProps>`
  ${SHARED_HEADER_STYLES}
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
`;

const MarqueeHeader = styled.h1<HeaderProps>`
  ${SHARED_HEADER_STYLES}
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
  animation-delay: 0.5s;
`;

const DataVisualizerHeader = styled.h1<HeaderProps>`
  ${SHARED_HEADER_STYLES}
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
  animation-delay: 1s;
`;

const ComponentsPage = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <Layout>
      <Container>
        <StyledLink to="/showcase/components/video-carousel">
          <VideoCarouselHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Video Carousel
          </VideoCarouselHeader>
        </StyledLink>
        <StyledLink to="/showcase/components/marquee">
          <MarqueeHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Marquee
          </MarqueeHeader>
        </StyledLink>
        <StyledLink to="#">
          <DataVisualizerHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Data Visualizer
          </DataVisualizerHeader>
        </StyledLink>
        <SpinningOtter margin={"0"} />
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
