import { useContext, useRef } from "react";
import styled, { css } from "styled-components";
import { CarouselContext } from "./utils/CarouselContextProvider";
import useHandleEscapeKeypress from "./utils/useHandleEscapeKeypress";
import {
  NEXT,
  PREV,
  SHARED_NAV_BUTTON_ROW_STYLES,
  SHARED_NAV_BUTTON_STYLES,
} from "./utils/constants";
import { LIGHT_GRAY, GRAY } from "src/styles/colors";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { Z_TEN } from "src/utils/constants/layer-constants";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import MuxVideo from "@mux/mux-video-react";
import { ActionProps, VisibilityProps } from "./CarouselWrapper";
import { buttonConfig } from "./utils/configs";
import CloseButton from "./CloseButton";
import PlayButton from "./PlayButton";

interface TransitionProps {
  isTransitioned: boolean | undefined;
}

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 16px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: calc(25% + 56px);
`;

const SlidesContainer = styled.div`
  display: flex;
  position: absolute;
  height: 50%;
  top: calc(100% + 10px);
  left: -50%;
  width: 200%;
`;

const SHARED_INACTIVE_SLIDE_STYLES = css`
  display: flex;
  position: absolute;
  height: 100%;
  width: calc(25% - 5px);
`;

const PrevClone = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_INACTIVE_SLIDE_STYLES}
  left: ${({ action }) => (action === PREV ? "25%" : "calc(0% - 5px)")};
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const Third = styled.div<VisibilityProps>`
  ${SHARED_INACTIVE_SLIDE_STYLES}
  left: 25%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedThird = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_INACTIVE_SLIDE_STYLES}
  left: ${({ action }) =>
    action === NEXT
      ? "calc(0% - 5px)"
      : action === PREV
      ? "calc(50% + 5px)"
      : "25%"};
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Second = styled.div<VisibilityProps>`
  ${SHARED_INACTIVE_SLIDE_STYLES}
  left: calc(50% + 5px);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedSecond = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_INACTIVE_SLIDE_STYLES}
  top: ${({ action }) => (action === PREV ? "calc(-200% - 10px)" : "0%")};
  left: ${({ action }) =>
    action === NEXT || action === PREV ? "25%" : "calc(50% + 5px)"};
  height: ${({ action }) => (action === PREV ? "200%" : "100%")};
  width: ${({ action }) => (action === PREV ? "50%" : "calc(25% - 5px)")};
  transition-property: top, left, height, width;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const NavButtonRow = styled.div`
  bottom: -24px;
  width: 100%;
  ${SHARED_NAV_BUTTON_ROW_STYLES}
`;

const NavButton = styled.button`
  ${SHARED_NAV_BUTTON_STYLES}
  height: 48px;
  width: 48px;
  margin: 0 5px 0;
  background-color: ${LIGHT_GRAY};
  font-size: 32px;
  &:hover {
    background-color: ${GRAY};
  }
  &:disabled {
    opacity: ${OPACITY_FADE};
    background-color: ${GRAY};
  }
`;

const ActiveClone = styled.div<ActionProps & VisibilityProps>`
  display: flex;
  position: absolute;
  left: ${({ action }) => (action === NEXT ? "0%" : "calc(-100% - 10px)")};
  width: 100%;
  height: 100%;
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Active = styled.div<TransitionProps & VisibilityProps>`
  display: flex;
  position: absolute;
  top: ${({ isTransitioned }) => (isTransitioned ? "-105%" : "0%")};
  width: 100%;
  height: 100%;
  z-index: ${Z_TEN};
  transition: top ${FIVE_HUNDRED_MS} ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedActive = styled.div<ActionProps & VisibilityProps>`
  display: flex;
  position: absolute;
  top: ${({ action }) => (action === NEXT ? "calc(100% + 10px)" : "0%")};
  left: ${({ action }) =>
    action === PREV
      ? "calc(-100% - 10px)"
      : action === NEXT
      ? "calc(50% + 5px)"
      : "0%"};
  height: ${({ action }) => (action === NEXT ? "50%" : "100%")};
  width: ${({ action }) => (action === NEXT ? "calc(50% - 5px)" : "100%")};
  transition-property: top, left, height, width;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const VideoContainer = styled.div<VisibilityProps>`
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const StyledMuxVideo = styled(MuxVideo)`
  border-radius: 16px;
`;

const CarouselWrapperMobile = () => {
  const context = useContext(CarouselContext);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useHandleEscapeKeypress(videoRef, () => context?.setIsVideoVisible(false));

  const handleNavButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.preventDefault();
    if (!context?.isAnimated) {
      if (index === 0) context?.nextAction();
      else context?.prevAction();
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
      <Container>
        <SlidesContainer>
          <PrevClone action={context?.action} isVisible={context?.isAnimated}>
            <SlideImage src={context?.prevClonePreviewUrl} alt="" />
          </PrevClone>
          <Third isVisible={!context?.isAnimated}>
            <SlideImage
              src={context?.thirdPreviewUrl}
              alt={context?.thirdAltText}
            />
          </Third>
          <AnimatedThird
            action={context?.action}
            isVisible={context?.isAnimated}
          >
            <SlideImage src={context?.secondPreviewUrl} alt="" />
          </AnimatedThird>
          <Second isVisible={!context?.isAnimated}>
            <SlideImage
              src={context?.secondPreviewUrl}
              alt={context?.secondAltText}
            />
          </Second>
          <AnimatedSecond
            action={context?.action}
            isVisible={context?.isAnimated}
          >
            <SlideImage src={context?.animatedSecondPreviewUrl} alt="" />
          </AnimatedSecond>
          <NavButtonRow>
            {buttonConfig.map(button => (
              <NavButton
                key={button.label}
                disabled={context?.isAnimated}
                onClick={e => handleNavButtonClick(e, button.index)}
              >
                {button.label}
              </NavButton>
            ))}
          </NavButtonRow>
        </SlidesContainer>
        <ActiveClone
          action={context?.action}
          isVisible={context?.isAnimated ?? false}
        >
          <SlideImage src={context?.nextClonePreviewUrl} alt="" />
        </ActiveClone>
        <Active
          isVisible={!context?.isAnimated}
          isTransitioned={context?.isVideoVisible}
        >
          <SlideImage
            src={context?.activePreviewUrl}
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
          isVisible={context?.isAnimated ?? false}
        >
          <SlideImage src={context?.animatedActivePreviewUrl} alt="" />
        </AnimatedActive>
        <VideoContainer isVisible={!context?.isAnimated}>
          <StyledMuxVideo
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
      </Container>
    </Wrapper>
  );
};

export default CarouselWrapperMobile;
