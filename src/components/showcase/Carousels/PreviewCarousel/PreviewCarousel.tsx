import { useContext } from "react";
import { PreviewCarouselContext } from "src/utils/providers/PreviewCarouselContextProvider";
import styled from "styled-components";
import {
  SHARED_NAV_BUTTON_STYLES,
  CAROUSEL_NAV_BUTTON_STYLES,
  PREV_NAV_BUTTON_STYLES,
  NEXT_NAV_BUTTON_STYLES,
} from "src/components/showcase/carousels/utils/constants";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";
import CarouselController from "src/components/showcase/carousels/PreviewCarousel/CarouselController/CarouselController";

const Container = styled.div`
  padding: 0 10px 50px;
  @media (min-width: 768px) {
    padding: ${STANDARD_X_PADDING};
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    padding-bottom: 100px;
  }
`;

const InternalWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 0 46px;
  @media (min-width: 768px) {
    max-width: 900px;
    padding: 0 72px;
  }
`;

const PrevButton = styled.button`
  ${SHARED_NAV_BUTTON_STYLES}
  ${CAROUSEL_NAV_BUTTON_STYLES}
  ${PREV_NAV_BUTTON_STYLES}
`;

const NextButton = styled.button`
  ${SHARED_NAV_BUTTON_STYLES}
  ${CAROUSEL_NAV_BUTTON_STYLES}
  ${NEXT_NAV_BUTTON_STYLES}
`;

const PreviewCarousel = () => {
  const context = useContext(PreviewCarouselContext);

  return (
    <Container>
      <InternalWrapper>
        <CarouselController />
        <PrevButton
          type="button"
          aria-label="previous"
          disabled={context?.isAnimated}
          onClick={() => context?.prevAction()}
        />
        <NextButton
          type="button"
          aria-label="next"
          disabled={context?.isAnimated}
          onClick={() => context?.nextAction()}
        />
      </InternalWrapper>
    </Container>
  );
};

export default PreviewCarousel;
