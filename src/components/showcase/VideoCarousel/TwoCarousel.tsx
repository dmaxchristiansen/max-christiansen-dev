import { useState } from "react";
import styled from "styled-components";
import { TwoCarouselProps } from "./types/videoCarousel";
import { buttonConfig } from "./utils/configs";
import {
  Quote,
  Attribution,
  Title,
  SHARED_NAV_BUTTON_ROW_STYLES,
  SHARED_NAV_BUTTON_STYLES,
  ACTION_KEYFRAMES,
} from "./utils/constants";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import QuotationMark from "./QuotationMark";
import TwoCarouselSlide from "./TwoCarouselSlide";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1100px;
  }
  @media (min-width: 992px) {
    padding-bottom: 40px;
  }
`;

interface CopyContainerProps {
  activeIndex: number;
  slideIndex: number;
}

const CopyContainer = styled.div<CopyContainerProps>`
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

const ContentContainer = styled.div`
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

interface SliderProps {
  activeIndex: number;
}

const Slider = styled.div<SliderProps>`
  display: flex;
  position: relative;
  top: 0;
  left: ${({ activeIndex }) => `-${activeIndex * 100}%`};
  height: 100%;
  width: 200%;
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

interface NavButtonProps {
  activeIndex: number;
  buttonIndex: number;
}

const NavButton = styled.button<NavButtonProps>`
  ${SHARED_NAV_BUTTON_STYLES}
  height: 48px;
  width: 48px;
  margin: 0 8px 0;
  font-size: 32px;
  background-color: ${({ activeIndex, buttonIndex }) =>
    activeIndex === buttonIndex ? "#848484" : "#dddddd"};
  &:hover {
    background-color: ${({ activeIndex, buttonIndex }) =>
      activeIndex !== buttonIndex && "#bcbcbc"};
  }
  @media (min-width: 992px) {
    height: 80px;
    width: 80px;
    margin: 0 12px 0;
    font-size: 36px;
  }
`;

const TwoCarousel: React.FC<TwoCarouselProps> = ({ slideConfig }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      {slideConfig.map(slide => (
        <CopyContainer
          key={slide.internalId}
          activeIndex={activeIndex}
          slideIndex={slide.index}
        >
          <QuotationMark isWhite={true} />
          <Quote>{slide.quote}</Quote>
          <Attribution>{slide.attribution}</Attribution>
          <Title>{slide.title}</Title>
        </CopyContainer>
      ))}
      <ContentContainer>
        <SliderWrapper>
          <Slider activeIndex={activeIndex}>
            {slideConfig.map(slide => (
              <TwoCarouselSlide
                key={slide.internalId}
                isSlideActive={slide.index === activeIndex}
                videoPlaybackId={slide.videoPlaybackId}
                videoPreviewImageUrl={slide.videoPreviewImageUrl}
                attribution={slide.attribution}
              />
            ))}
          </Slider>
        </SliderWrapper>
        <NavButtonRow>
          {buttonConfig.map(button => (
            <NavButton
              key={button.label}
              activeIndex={activeIndex}
              buttonIndex={button.index}
              disabled={activeIndex === button.index ? true : false}
              onClick={() =>
                button.index === 1 ? setActiveIndex(1) : setActiveIndex(0)
              }
            >
              {button.label}
            </NavButton>
          ))}
        </NavButtonRow>
      </ContentContainer>
    </Container>
  );
};

export default TwoCarousel;
