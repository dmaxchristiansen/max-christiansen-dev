import { useContext, useRef } from "react";
import styled, { css } from "styled-components";
import useHandleEscapeKeypress from "../../utils/useHandleEscapeKeypress";
import { CarouselContext } from "../../utils/CarouselContextProvider";
import { buttonConfig } from "../../utils/configs";
import {
  NEXT,
  PREV,
  SHARED_NAV_BUTTON_STYLES,
  SHARED_NAV_BUTTON_ROW_STYLES,
} from "../../utils/constants";
import { LIGHT_GRAY, GRAY } from "src/utils/constants/colors";
import { FIVE_HUNDRED_MS, TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { OPACITY_FADE } from "src/utils/constants/animations";
import { Z_TWENTY } from "src/utils/constants/layers";
import MuxVideo from "@mux/mux-video-react";
import CloseButton from "../../sharedComponents/CloseButton/CloseButton";
import PlayButton from "../../sharedComponents/PlayButton/PlayButton";

export interface VisibilityProps {
  isVisible: boolean | undefined;
}

export interface ActionProps {
  action: "prev" | "next" | "reset" | undefined;
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

const SlidesContainer = styled.div`
  display: flex;
  position: absolute;
  left: -50%;
  height: 100%;
  width: 200%;
`;

const SHARED_SLIDE_STYLES = css`
  display: flex;
  position: absolute;
  aspect-ratio: 367 / 550;
`;

const NextClone = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) => (action === NEXT ? "25%" : "0%")};
  height: 100%;
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 367 / 550;
`;

const Active = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: 25%;
  height: 100%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedActive = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) =>
    action === PREV ? "0%" : action === NEXT ? "47.5%" : "25%"};
  height: ${({ action }) => (action === "next" ? "70%" : "100%")};
  transition-property: left, height;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Second = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: 47.5%;
  height: 70%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedSecond = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) =>
    action === PREV ? "25%" : action === NEXT ? "61.85%" : "47.5%"};
  height: ${({ action }) => (action === PREV ? "100%" : "70%")};
  transition-property: left, height;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Third = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: 61.85%;
  height: 70%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const AnimatedThird = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) =>
    action === PREV ? "47.5%" : action === NEXT ? "76%" : "61.85%"};
  height: 70%;
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const PrevClone = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) => (action === PREV ? "61.85%" : "76%")};
  transition: left ${TWO_FIFTY_MS};
  height: 70%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const NavButtonRow = styled.div`
  ${SHARED_NAV_BUTTON_ROW_STYLES}
  top: calc(70% - 24px);
  right: 0;
  width: 54.5%;
  @media (min-width: 992px) {
    top: calc(70% - 32px);
  }
`;

interface NavButtonProps {
  index: number;
}

const NavButton = styled.button<NavButtonProps>`
  ${SHARED_NAV_BUTTON_STYLES}
  height: 48px;
  width: 48px;
  margin-right: ${({ index }) => (index === 0 ? "24px" : "0")};
  margin-left: ${({ index }) => (index === 0 ? "0" : "24px")};
  background-color: ${LIGHT_GRAY};
  font-size: 32px;
  &:hover {
    background-color: ${GRAY};
  }
  &:disabled {
    opacity: ${OPACITY_FADE};
    background-color: ${GRAY};
  }
  @media (min-width: 992px) {
    height: 64px;
    width: 64px;
    font-size: 36px;
  }
`;

const VideoContainer = styled.div<VisibilityProps>`
  display: flex;
  position: relative;
  top: ${({ isVisible }) => (isVisible ? "0%" : "-105%")};
  width: 100%;
  border-radius: 16px;
  z-index: ${Z_TWENTY};
  transition: top ${FIVE_HUNDRED_MS} ease-in-out;
`;

const CarouselWrapper = () => {
  const context = useContext(CarouselContext);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useHandleEscapeKeypress(videoRef, () => context?.setIsVideoVisible(false));

  const handleNavButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.preventDefault();
    if (!context?.isAnimated) {
      if (index === 0) context?.prevAction();
      else context?.nextAction();
    } else return;
  };

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      context?.setIsVideoVisible(true);
      videoRef.current
        .play()
        .then(_ => {
          console.log("Video playback successful");
        })
        .catch(error => {
          console.log("Error: Video playback issue", error);
        });
    }
  };

  return (
    <Wrapper>
      <SlidesContainer>
        <NextClone action={context?.action} isVisible={context?.isAnimated}>
          <SlideImage src={context?.nextCloneThumbnailUrl} alt="" />
        </NextClone>

        <Active isVisible={!context?.isAnimated}>
          <SlideImage
            src={context?.activeThumbnailUrl}
            alt={context?.activeName}
          />
          <PlayButton
            isButtonFocusable={!context?.isVideoVisible}
            attribution={context?.activeName ?? ""}
            onButtonClick={() => handlePlayButtonClick()}
          />
        </Active>
        <AnimatedActive
          action={context?.action}
          isVisible={context?.isAnimated}
        >
          <SlideImage src={context?.animatedActiveThumbnailUrl} alt="" />
        </AnimatedActive>
        <Second isVisible={!context?.isAnimated}>
          <SlideImage
            src={context?.secondThumbnailUrl}
            alt={context?.secondAltText}
          />
        </Second>
        <AnimatedSecond
          action={context?.action}
          isVisible={context?.isAnimated}
        >
          <SlideImage src={context?.animatedSecondThumbnailUrl} alt="" />
        </AnimatedSecond>
        <Third isVisible={!context?.isAnimated}>
          <SlideImage
            src={context?.thirdThumbnailUrl}
            alt={context?.thirdAltText}
          />
        </Third>
        <AnimatedThird action={context?.action} isVisible={context?.isAnimated}>
          <SlideImage src={context?.animatedThirdThumbnailUrl} alt="" />
        </AnimatedThird>
        <PrevClone action={context?.action} isVisible={context?.isAnimated}>
          <SlideImage src={context?.prevCloneThumbnailUrl} alt="" />
        </PrevClone>
      </SlidesContainer>
      <NavButtonRow>
        {buttonConfig.map(button => (
          <NavButton
            key={button.label}
            index={button.index}
            disabled={context?.isAnimated}
            onClick={e => handleNavButtonClick(e, button.index)}
          >
            {button.label}
          </NavButton>
        ))}
      </NavButtonRow>
      <VideoContainer isVisible={context?.isVideoVisible}>
        <MuxVideo
          ref={videoRef}
          width="100%"
          playbackId={context?.videoPlaybackId}
          poster={context?.activePreviewUrl}
          streamType="on-demand"
          controls={context?.isVideoVisible}
          loop
          playsInline
        />
        <CloseButton
          isButtonFocusable={context?.isVideoVisible ?? false}
          videoRef={videoRef}
          onButtonClick={() => context?.setIsVideoVisible(false)}
        />
      </VideoContainer>
    </Wrapper>
  );
};

export default CarouselWrapper;
