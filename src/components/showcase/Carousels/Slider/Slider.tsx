import { useState } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import {
  SliderProps,
  SliderLengthProps,
  ActiveIndexProps,
} from "src/components/showcase/Carousels/types/slider";
import Slide from "./Slide/Slide";
import { BLACK } from "src/utils/constants/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px 100px;
  @media (max-width: 767px) {
    padding: 0 10px 60px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 796px;
  padding: 0 72px;
  @media (max-width: 767px) {
    padding: 0 46px;
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

const SharedButtonStyles = css`
  display: block;
  position: absolute;
  top: calc(50% - 24px);
  height: 48px;
  width: 48px;
  margin: 0;
  padding: 4px;
  background-color: #dddddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:before {
    position: absolute;
    top: -3px;
    font-size: 50px;
    font-family: Consolas;
    color: ${BLACK};
  }
  &:hover:enabled {
    background-color: #bcbcbc;
  }
  &:disabled {
    background-color: #848484;
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

const Slider: React.FC<SliderProps> = ({ slideConfig }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
                  videoUrl={slide.videoUrl}
                  imageUrl={slide.imageUrl}
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
  );
};

export default Slider;
