import styled from "styled-components";
import { VideoCarouselProps, SlideProps } from "./types/videoCarousel";
import WindowResizeContextProvider from "src/utils/providers/WindowResizeContextProvider";
import CarouselContextProvider from "./utils/CarouselContextProvider";
import Single from "./Single";
import TwoCarousel from "./TwoCarousel";
import Carousel from "./Carousel";

const Container = styled.div`
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 64px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
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
  header,
  slideConfig,
}) => {
  const renderVariants = (slideConfig: SlideProps[]) => {
    if (slideConfig.length === 1) {
      return <Single slide={slideConfig[0]} />;
    } else if (slideConfig.length === 2) {
      return <TwoCarousel slideConfig={slideConfig} />;
    } else {
      return (
        <CarouselContextProvider slideConfig={slideConfig}>
          <Carousel />
        </CarouselContextProvider>
      );
    }
  };

  return (
    <WindowResizeContextProvider>
      <Container>
        <Wrapper>
          {header && <Header>{header}</Header>}
          {renderVariants(slideConfig)}
        </Wrapper>
      </Container>
    </WindowResizeContextProvider>
  );
};

export default VideoCarousel;
