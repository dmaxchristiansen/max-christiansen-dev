import { useContext } from "react";
import styled from "styled-components";
import { Quote, Attribution, Title } from "../utils/constants";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animations";
import useHandleWindowResize, {
  isLessThanWidthThreshold,
} from "src/utils/hooks/useHandleWindowResize";
import { PreviewCarouselContext } from "../utils/PreviewCarouselContextProvider";
import QuotationMarkSvg from "src/components/svgs/QuotationMarkSvg/QuotationMarkSvg";
import CarouselWrapper from "./CarouselWrapper/CarouselWrapper";
import CarouselWrapperMobile from "./CarouselWrapperMobile/CarouselWrapperMobile";

const Container = styled.div`
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

const Carousel: React.FC = () => {
  const context = useContext(PreviewCarouselContext);
  const isMobile = useHandleWindowResize(isLessThanWidthThreshold(767));

  return (
    <Container>
      <CopyContainer
        key={`copyContainer-${context?.activeIndex.toString() ?? ""}`}
      >
        <QuotationMarkSvg />
        <Quote>{context?.activeQuote}</Quote>
        <Attribution>{context?.activeName}</Attribution>
        <Title>{context?.activeTitle}</Title>
      </CopyContainer>
      {/*
       * Programmatically creating / destroying components
       * mitigates rendering duplicate video refs
       */}
      {!isMobile ? <CarouselWrapper /> : <CarouselWrapperMobile />}
    </Container>
  );
};

export default Carousel;
