import { useContext } from "react";
import styled, { css } from "styled-components";
import { PreviewCarouselContext } from "src/utils/providers/PreviewCarouselContextProvider";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";
import useHandleWindowResize, {
  isLessThanWidthThreshold,
} from "src/utils/hooks/useHandleWindowResize";
import {
  WHITE_SMOKE,
  GRAY_DAY,
  BLACK,
  STORM_CLOUD,
} from "src/utils/constants/colors";
import { LIGHT_SHADOW } from "src/utils/constants/shadows";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import CarouselController from "src/components/showcase/carousels/PreviewCarousel/CarouselController/CarouselController";
import CarouselControllerMobile from "src/components/showcase/carousels/PreviewCarousel/CarouselControllerMobile/CarouselControllerMobile";

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

const InternalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 72px;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 900px;
  }
`;

const SharedButtonStyles = css`
  position: absolute;
  top: calc(50% - 24px);
  height: 48px;
  width: 48px;
  padding: 4px;
  background-color: ${WHITE_SMOKE};
  border: none;
  border-radius: 5px;
  box-shadow: ${LIGHT_SHADOW};
  cursor: pointer;
  transition: background-color ${TWO_FIFTY_MS};
  &:before {
    position: absolute;
    top: -3px;
    font-size: 50px;
    font-family: Consolas;
    color: ${BLACK};
  }
  &:hover:enabled {
    background-color: ${GRAY_DAY};
  }
  &:disabled {
    background-color: ${STORM_CLOUD};
    cursor: auto;
  }
  @media (max-width: 767px) {
    height: 36px;
    width: 36px;
    &:before {
      top: -4px;
      font-size: 42px;
    }
  }
`;

const PrevButton = styled.button`
  ${SharedButtonStyles}
  position: absolute;
  left: 0;
  &:before {
    content: "<";
    left: 10px;
    @media (max-width: 767px) {
      left: 6px;
    }
  }
`;

const NextButton = styled.button`
  ${SharedButtonStyles}
  right: 0;
  &:before {
    content: ">";
    left: 12px;
    @media (max-width: 767px) {
      left: 7px;
    }
  }
`;

const PreviewCarousel = () => {
  const isMobile = useHandleWindowResize(isLessThanWidthThreshold(767));
  const context = useContext(PreviewCarouselContext);

  return (
    <Container>
      <InternalWrapper>
        {!isMobile ? <CarouselController /> : <CarouselControllerMobile />}
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
