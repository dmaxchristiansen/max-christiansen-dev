import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
  SHARED_NAV_BUTTON_STYLES,
  SLIDER_NAV_BUTTON_STYLES,
  PREV_NAV_BUTTON_BEFORE_STYLES,
  NEXT_NAV_BUTTON_BEFORE_STYLES,
} from "src/components/showcase/carousels/utils/constants";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import {
  SliderProps,
  SliderLengthProps,
  ActiveIndexProps,
} from "src/components/showcase/carousels/types/slider";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";
import Slide from "./Slide/Slide";
import { WHITE_SMOKE, STORM_CLOUD } from "src/utils/constants/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    padding: ${STANDARD_X_PADDING};
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 796px;
  padding: 0 46px;
  @media (min-width: 768px) {
    padding: 0 72px;
  }
`;

const SliderContainer = styled.div`
  max-width: 700px;
  overflow: hidden;
  border-radius: 16px;
`;

const SliderWrapper = styled.div`
  width: calc(100% + 16px);
  border-radius: 16px;
`;

const AnimatedSlider = styled.div<ActiveIndexProps & SliderLengthProps>`
  display: flex;
  position: relative;
  top: 0;
  left: ${({ activeIndex }) => `-${activeIndex * 100}%`};
  height: 100%;
  width: ${({ sliderLength }) => `${sliderLength}00%`};
  transition: left ${FIVE_HUNDRED_MS} ease-in-out;
`;

const PrevButton = styled.button`
  ${SHARED_NAV_BUTTON_STYLES}
  ${SLIDER_NAV_BUTTON_STYLES}
  ${PREV_NAV_BUTTON_BEFORE_STYLES}
  left: 0;
`;

const NextButton = styled.button`
  ${SHARED_NAV_BUTTON_STYLES}
  ${SLIDER_NAV_BUTTON_STYLES}
  ${NEXT_NAV_BUTTON_BEFORE_STYLES}
  right: 0;
`;

const ProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100px;
  margin: 0 auto 60px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

interface ProgressButtonProps {
  buttonIndex: number;
}

const ProgressButton = styled.button<ProgressButtonProps & ActiveIndexProps>`
  height: 12px;
  width: 12px;
  border: none;
  border-radius: 50%;
  background-color: ${({ buttonIndex, activeIndex }) =>
    buttonIndex === activeIndex ? STORM_CLOUD : WHITE_SMOKE};
  cursor: pointer;
`;

const Slider: React.FC<SliderProps> = ({ slideConfig }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Container>
        <Wrapper>
          <SliderContainer>
            <SliderWrapper>
              <AnimatedSlider
                activeIndex={activeIndex}
                sliderLength={slideConfig.length}
              >
                {slideConfig.map(slide => (
                  <Slide
                    key={uuidv4()}
                    isSlideActive={slide.index === activeIndex}
                    muxVideoId={slide.muxVideoId}
                    backgroundImageUrl={slide.backgroundImageUrl}
                    videoTitle={slide.videoTitle}
                  />
                ))}
              </AnimatedSlider>
            </SliderWrapper>
          </SliderContainer>
          <PrevButton
            type="button"
            aria-label="previous"
            disabled={activeIndex === 0 ? true : false}
            onClick={() => setActiveIndex(activeIndex - 1)}
          />
          <NextButton
            type="button"
            aria-label="next"
            disabled={activeIndex === slideConfig.length - 1 ? true : false}
            onClick={() => setActiveIndex(activeIndex + 1)}
          />
        </Wrapper>
      </Container>
      <ProgressRow>
        {slideConfig.map(button => (
          <ProgressButton
            key={uuidv4()}
            type="button"
            aria-label={`Go to slide ${button.index + 1}`}
            buttonIndex={button.index}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(button.index)}
          />
        ))}
      </ProgressRow>
    </>
  );
};

export default Slider;
