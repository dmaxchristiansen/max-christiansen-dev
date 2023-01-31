import styled from "styled-components";
import { PreviewCarouselProps } from "./types/previewCarousel";
import {
  STANDARD_WIDTH,
  STANDARD_X_PADDING,
} from "src/utils/constants/layouts";
import PreviewCarouselContextProvider from "./utils/PreviewCarouselContextProvider";
import Carousel from "./Carousel/Carousel";

const Container = styled.div`
  padding: ${STANDARD_X_PADDING};
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
`;

const PreviewCarousel: React.FC<PreviewCarouselProps> = ({ slideConfig }) => (
  <Container>
    <Wrapper>
      <PreviewCarouselContextProvider slideConfig={slideConfig}>
        <Carousel />
      </PreviewCarouselContextProvider>
    </Wrapper>
  </Container>
);

export default PreviewCarousel;
