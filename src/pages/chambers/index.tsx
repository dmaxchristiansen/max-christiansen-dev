import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css, keyframes } from "styled-components";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 520px) {
  }
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
  perspective: 500px;
`;

const ImageWrapper = styled.div`
  animation: ${imageKeyframes} 5s linear infinite;
`;

const ChambersPage = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  return (
    <Layout>
      <Container>
        <StyledLink to="/chambers/marquee">
          <MarqueeHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Marquee
          </MarqueeHeader>
        </StyledLink>
        <StyledLink to="/">
          <VideoCarouselHeader
            isAnimated={isAnimated}
            onMouseOver={() => setIsAnimated(false)}
            onMouseLeave={() => setIsAnimated(true)}
          >
            Something Else
          </VideoCarouselHeader>
        </StyledLink>
        <ImageContainer>
          <ImageWrapper>
            <StaticImage
              src="../../images/otter-friend.png"
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

export const Head = () => <Seo title="Chambers" />;

export default ChambersPage;
