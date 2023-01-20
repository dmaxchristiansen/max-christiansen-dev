import styled from "styled-components";
import { VideoCarouselProps, SlideProps } from "./types/videoCarousel";
import CarouselContextProvider from "./utils/CarouselContextProvider";
import TwoCarousel from "./TwoCarousel/TwoCarousel";
import Carousel from "./Carousel/Carousel";

const Container = styled.div`
  padding: 0 30px 50px;
  @media (min-width: 768px) {
    padding: 0 30px 80px;
  }
  @media (min-width: 992px) {
    padding: 0 30px 100px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const Header = styled.h2`
  display: block;
  margin: 0 auto 16px;
  font-size: 30px;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 40px;
  }
  @media (min-width: 992px) {
    margin-bottom: 40px;
  }
`;

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  header,
  slideConfig,
}) => {
  const renderVariants = (slideConfig: SlideProps[]) => {
    if (slideConfig.length === 2) {
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
    <Container>
      <Wrapper>
        {header && <Header>{header}</Header>}
        {renderVariants(slideConfig)}
      </Wrapper>
    </Container>
  );
};

export default VideoCarousel;
