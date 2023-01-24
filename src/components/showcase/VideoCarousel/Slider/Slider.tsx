import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  Quote,
  Attribution,
  Title,
  SHARED_NAV_BUTTON_ROW_STYLES,
  SHARED_NAV_BUTTON_STYLES,
  ACTION_KEYFRAMES,
} from "../utils/constants";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import {
  SliderProps,
  SliderLengthProps,
  ActiveIndexProps,
  SlideIndexProps,
} from "src/components/showcase/VideoCarousel/types/slider";
import QuotationMarkSvg from "src/components/svgs/QuotationMarkSvg/QuotationMarkSvg";
import TwoCarouselSlide from "./Slide/Slide";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 30px 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1160px;
  }
  @media (min-width: 992px) {
    padding: 0 30px 40px;
  }
`;

const QuoteContainer = styled.div<ActiveIndexProps & SlideIndexProps>`
  display: ${({ activeIndex, slideIndex }) =>
    activeIndex === slideIndex ? "flex" : "none"};
  flex-direction: column;
  min-height: 182px;
  margin-bottom: 32px;
  animation: ${ACTION_KEYFRAMES} ${FIVE_HUNDRED_MS};
  @media (min-width: 768px) {
    width: 35%;
    min-height: unset;
    margin-bottom: 0;
    padding-right: 24px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    width: 65%;
  }
`;

const SliderWrapper = styled.div`
  width: calc(100% + 16px);
  overflow: hidden;
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

const NavButtonRow = styled.div`
  ${SHARED_NAV_BUTTON_ROW_STYLES}
  width: 100%;
  margin-top: -24px;
  @media (min-width: 992px) {
    margin-top: -40px;
  }
`;

const NavButton = styled.button<ActiveIndexProps>`
  ${SHARED_NAV_BUTTON_STYLES}
  height: 48px;
  width: 48px;
  margin: 0 8px 0;
  font-size: 32px;
  background-color: #dddddd;
  &:hover:enabled {
    background-color: #bcbcbc;
  }
  &:disabled {
    background-color: #848484;
  }
  @media (min-width: 992px) {
    height: 80px;
    width: 80px;
    margin: 0 12px 0;
    font-size: 36px;
  }
`;

const Slider: React.FC<SliderProps> = ({ slideConfig }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      {slideConfig.map(slide => (
        <QuoteContainer
          key={uuidv4()}
          activeIndex={activeIndex}
          slideIndex={slide.index}
        >
          <QuotationMarkSvg />
          <Quote>{slide.quote}</Quote>
          <Attribution>{slide.attribution}</Attribution>
          <Title>{slide.title}</Title>
        </QuoteContainer>
      ))}
      <SliderContainer>
        <SliderWrapper>
          <AnimatedSlider
            activeIndex={activeIndex}
            sliderLength={slideConfig.length - 1}
          >
            {slideConfig.map(slide => (
              <TwoCarouselSlide
                key={uuidv4()}
                isSlideActive={slide.index === activeIndex}
                videoPlaybackId={slide.videoPlaybackId}
                videoPreviewImageUrl={slide.videoPreviewImageUrl}
                attribution={slide.attribution}
              />
            ))}
          </AnimatedSlider>
        </SliderWrapper>
        <NavButtonRow>
          <NavButton
            activeIndex={activeIndex}
            disabled={activeIndex === 0 ? true : false}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            ←
          </NavButton>
          <NavButton
            activeIndex={activeIndex}
            disabled={activeIndex === slideConfig.length - 1 ? true : false}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            →
          </NavButton>
        </NavButtonRow>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
