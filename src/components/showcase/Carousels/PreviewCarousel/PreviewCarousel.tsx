import { useContext } from "react";
import styled from "styled-components";
import {
  Quote,
  Attribution,
  Title,
} from "src/components/showcase/carousels/utils/constants";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animations";
import {
  STANDARD_WIDTH,
  STANDARD_X_PADDING,
} from "src/utils/constants/layouts";
import useHandleWindowResize, {
  isLessThanWidthThreshold,
} from "src/utils/hooks/useHandleWindowResize";
import { PreviewCarouselContext } from "src/utils/providers/PreviewCarouselContextProvider";
import QuotationMarkSvg from "src/components/svgs/QuotationMarkSvg/QuotationMarkSvg";
import CarouselWrapper from "src/components/showcase/carousels/PreviewCarousel/CarouselWrapper/CarouselWrapper";
import CarouselWrapperMobile from "src/components/showcase/carousels/PreviewCarousel/CarouselWrapperMobile/CarouselWrapperMobile";

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

const ExternalWrapper = styled.div`
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
`;

const InternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1100px;
  }
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 182px;
  margin: 0;
  animation: ${OPACITY_KEYFRAMES} ${TWO_FIFTY_MS};
  @media (min-width: 768px) {
    max-width: 180px;
    min-height: unset;
    margin-right: 20px;
  }
  @media (min-width: 992px) {
    max-width: 240px;
    margin-right: 64px;
  }
`;

const PreviewCarousel = () => {
  const context = useContext(PreviewCarouselContext);
  const isMobile = useHandleWindowResize(isLessThanWidthThreshold(767));

  return (
    <Container>
      <ExternalWrapper>
        <InternalWrapper>
          <CopyContainer
            key={`copyContainer-${context?.activeIndex.toString() ?? ""}`}
          >
            <QuotationMarkSvg />
            <Quote>{context?.activeQuote}</Quote>
            <Attribution>{context?.activeName}</Attribution>
            <Title>{context?.activeTitle}</Title>
          </CopyContainer>
          {!isMobile ? <CarouselWrapper /> : <CarouselWrapperMobile />}
        </InternalWrapper>
      </ExternalWrapper>
    </Container>
  );
};

export default PreviewCarousel;
