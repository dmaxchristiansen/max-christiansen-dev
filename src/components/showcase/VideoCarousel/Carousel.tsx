import { useContext } from "react";
import styled from "styled-components";
import { Quote, Attribution, Title, ACTION_KEYFRAMES } from "./utils/constants";
import { TWO_FIFTY_MS } from "src/utils/constants/transition-speeds";
import useHandleWindowResize, {
  isLessThanWidthThreshold,
} from "src/utils/hooks/useHandleWindowResize";
import { CarouselContext } from "./utils/CarouselContextProvider";
import QuotationMark from "./QuotationMark";
import CarouselWrapper from "./CarouselWrapper";
import CarouselWrapperMobile from "./CarouselWrapperMobile";

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
  animation: ${ACTION_KEYFRAMES} ${TWO_FIFTY_MS};
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
  const context = useContext(CarouselContext);
  const isMobile = useHandleWindowResize(isLessThanWidthThreshold(767));

  return (
    <Container>
      <CopyContainer
        key={`copyContainer-${context?.activeIndex.toString() ?? ""}`}
      >
        <QuotationMark isWhite={true} />
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
