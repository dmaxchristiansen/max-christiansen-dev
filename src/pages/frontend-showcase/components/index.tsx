import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css, keyframes } from "styled-components";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface HeaderProps {
  isAnimated: boolean;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const headerKeyframes = keyframes`
  0% {
    text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
  }
  50% {
    text-shadow: 0 0 32px #fe05e1, 0 0 48px #fe05e1;
  }
  100% {
    text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
  }
`;

const SHARED_HEADER_STYLES = css`
  margin: 0 0 32px;
  text-align: center;
  color: #ffffff;
  font-family: "Mr Dafoe";
  font-size: 120px;
  text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
  animation: ${headerKeyframes} 2s;
  animation-iteration-count: infinite;
  transition: color 0.8s;
  &:hover {
    color: #165ff3;
  }
`;

const MarqueeHeader = styled.h1<HeaderProps>`
  ${SHARED_HEADER_STYLES}
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
  // animation-delay: 0.5s;
`;

const VideoCarouselHeader = styled.h1<HeaderProps>`
  ${SHARED_HEADER_STYLES}
  animation-play-state: ${({ isAnimated }) =>
    isAnimated ? "running" : "paused"};
  animation-delay: 1s;
`;

const imageKeyframes = keyframes`
  from { 
    transform: rotateY(0deg); 
  }
  to { 
    transform: rotateY(360deg);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  perspective: 500px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  animation: ${imageKeyframes} 5s linear infinite;
`;

const ComponentsPage = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <Layout>
      <Container>
        <StyledLink to="/frontend-showcase/components/marquee">
          <MarqueeHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Marquee
          </MarqueeHeader>
        </StyledLink>
        <StyledLink to="/frontend-showcase/components/video-carousel">
          <VideoCarouselHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Video Carousel
          </VideoCarouselHeader>
        </StyledLink>
        <ImageContainer>
          <ImageWrapper>
            <StaticImage
              src="../../../images/otter-friend.png"
              alt="otter"
              width={400}
              placeholder="tracedSVG"
            />
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Components"
    description="React components built in Gatsby"
    pathname="/frontend-showcase/components"
  />
);

export default ComponentsPage;
