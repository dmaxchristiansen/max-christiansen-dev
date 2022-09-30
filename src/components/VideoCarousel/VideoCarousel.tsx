import styled from "styled-components";
import { VideoCarouselProps, SlideProps } from "./types/videoCarousel";
import WindowResizeContextProvider from "src/utils/providers/WindowResizeContextProvider";
import CarouselContextProvider from "./utils/CarouselContextProvider";
import Single from "./Single";
import TwoCarousel from "./TwoCarousel";
import Carousel from "./Carousel";

interface BackgroundProps {
  isBackgroundDark: boolean;
}

const Container = styled.div<BackgroundProps>`
  padding-top: 32px;
  background-color: ${({ isBackgroundDark }) =>
    isBackgroundDark ? "#000000" : "#ffffff"};
  @media (min-width: 768px) {
    padding-top: 64px;
  }
`;

const Wrapper = styled.div<BackgroundProps>`
  max-width: 1350px;
  margin: 0 auto;
  color: ${({ isBackgroundDark }) =>
    isBackgroundDark ? "#ffffff" : "#000000"};
`;

const Header = styled.h2`
  display: none;
  margin: 0 auto 16px;
  text-align: center;
  @media (min-width: 768px) {
    display: block;
    max-width: 558px;
    margin-bottom: 64px;
    font-size: 40px;
  }
  @media (min-width: 992px) {
    max-width: 882px;
    margin-bottom: 100px;
  }
`;

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  isBackgroundDark,
  header,
  slideConfig,
}) => {
  const renderVariants = (slideConfig: SlideProps[]) => {
    if (slideConfig.length === 1) {
      return (
        <Single slide={slideConfig[0]} isBackgroundDark={isBackgroundDark} />
      );
    } else if (slideConfig.length === 2) {
      return (
        <TwoCarousel
          slideConfig={slideConfig}
          isBackgroundDark={isBackgroundDark}
        />
      );
    } else {
      return (
        <CarouselContextProvider slideConfig={slideConfig}>
          <Carousel isBackgroundDark={isBackgroundDark} />
        </CarouselContextProvider>
      );
    }
  };

  return (
    <WindowResizeContextProvider>
      <Container isBackgroundDark={isBackgroundDark}>
        <Wrapper isBackgroundDark={isBackgroundDark}>
          {header && <Header>{header}</Header>}
          {renderVariants(slideConfig)}
        </Wrapper>
      </Container>
    </WindowResizeContextProvider>
  );
};

export default VideoCarousel;
