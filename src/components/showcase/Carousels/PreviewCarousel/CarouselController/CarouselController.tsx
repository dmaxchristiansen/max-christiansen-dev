import { useContext, useRef } from "react";
import styled, { css } from "styled-components";
import useHandleEscapeKeypress from "src/components/showcase/carousels/utils/useHandleEscapeKeypress";
import { PreviewCarouselContext } from "src/utils/providers/PreviewCarouselContextProvider";
import { buttonConfig } from "src/components/showcase/carousels/utils/configs";
import { NEXT, PREV } from "src/components/showcase/carousels/utils/constants";
import { WHITE_SMOKE, GRAY_DAY, BLACK } from "src/utils/constants/colors";
import { FIVE_HUNDRED_MS, TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { OPACITY_FADE } from "src/utils/constants/animations";
import { Z_TWENTY, Z_TEN } from "src/utils/constants/layers";
import { LIGHT_SHADOW } from "src/utils/constants/shadows";
import {
  VisibilityProps,
  ActionProps,
} from "src/components/showcase/carousels/types/previewCarousel";
import MuxVideo from "@mux/mux-video-react";
import CloseButton from "src/components/showcase/carousels/sharedComponents/CloseButton/CloseButton";
import PlayButton from "src/components/showcase/carousels/sharedComponents/PlayButton/PlayButton";

const OverflowContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

const CarouselWrapper = styled.div`
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

const Image = styled.img`
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 367 / 550;
`;

const NextClone = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  /* top: 12.5%; */
  left: ${({ action }) => (action === NEXT ? "25%" : "0%")};
  height: 75%;
  transition: left ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Next = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  /* top: 12.5%; */
  left: 25%;
  height: 75%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedNext = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  /* top: ${({ action }) => (action === NEXT ? "0" : "12.5%")}; */
  left: ${({ action }) =>
    action === PREV ? "0%" : action === NEXT ? "40.62%" : "25%"};
  height: ${({ action }) => (action === NEXT ? "100%" : "75%")};
  transition-property: left, height;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Active = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: 40.62%;
  height: 100%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const AnimatedActive = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) =>
    action === PREV ? "25%" : action === NEXT ? "60.93%" : "40.62%"};
  height: ${({ action }) =>
    action === PREV || action === NEXT ? "75%" : "100%"};
  transition-property: left, height;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const Prev = styled.div<VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: 60.93%;
  height: 75%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const AnimatedPrev = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) =>
    action === PREV ? "40.62%" : action === NEXT ? "76%" : "60.93%"};
  height: ${({ action }) => (action === PREV ? "100%" : "75%")};
  transition-property: left, height;
  transition-duration: ${TWO_FIFTY_MS};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const PrevClone = styled.div<ActionProps & VisibilityProps>`
  ${SHARED_SLIDE_STYLES}
  left: ${({ action }) => (action === PREV ? "60.93%" : "76%")};
  transition: left ${TWO_FIFTY_MS};
  height: 75%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const NavButtonRow = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(70% - 24px);
  right: 0;
  width: 100%;
  z-index: ${Z_TEN};
  @media (min-width: 992px) {
    top: calc(100% - 32px);
  }
`;

interface NavButtonProps {
  index: number;
}

const NavButton = styled.button<NavButtonProps>`
  height: 48px;
  width: 48px;
  margin-right: ${({ index }) => (index === 0 ? "24px" : "0")};
  margin-left: ${({ index }) => (index === 0 ? "0" : "24px")};
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: ${WHITE_SMOKE};
  box-shadow: ${LIGHT_SHADOW};
  color: ${BLACK};
  font-size: 32px;
  cursor: pointer;
  transition: background ${TWO_FIFTY_MS};
  &:hover {
    background-color: ${GRAY_DAY};
  }
  &:disabled {
    opacity: ${OPACITY_FADE};
    background-color: ${GRAY_DAY};
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

const CarouselController = () => {
  const context = useContext(PreviewCarouselContext);
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
    <>
      <OverflowContainer>
        <CarouselWrapper>
          <NextClone action={context?.action} isVisible={context?.isAnimated}>
            <Image src={context?.nextCloneThumbnailUrl} alt="" />
          </NextClone>
          <Next isVisible={!context?.isAnimated}>
            <Image
              src={context?.activeThumbnailUrl}
              alt={context?.activeName}
            />
          </Next>
          <AnimatedNext
            action={context?.action}
            isVisible={context?.isAnimated}
          >
            <Image src={context?.animatedActiveThumbnailUrl} alt="" />
          </AnimatedNext>
          <Active isVisible={!context?.isAnimated}>
            <Image
              src={context?.secondThumbnailUrl}
              alt={context?.secondAltText}
            />
            <PlayButton
              isButtonFocusable={!context?.isVideoVisible}
              videoTitle={context?.activeName ?? ""}
              onButtonClick={() => handlePlayButtonClick()}
            />
          </Active>
          <AnimatedActive
            action={context?.action}
            isVisible={context?.isAnimated}
          >
            <Image src={context?.animatedSecondThumbnailUrl} alt="" />
          </AnimatedActive>
          <Prev isVisible={!context?.isAnimated}>
            <Image
              src={context?.thirdThumbnailUrl}
              alt={context?.thirdAltText}
            />
          </Prev>
          <AnimatedPrev
            action={context?.action}
            isVisible={context?.isAnimated}
          >
            <Image src={context?.animatedThirdThumbnailUrl} alt="" />
          </AnimatedPrev>
          <PrevClone action={context?.action} isVisible={context?.isAnimated}>
            <Image src={context?.prevCloneThumbnailUrl} alt="" />
          </PrevClone>
        </CarouselWrapper>
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
            playbackId={context?.muxVideoId}
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
      </OverflowContainer>
    </>
  );
};

export default CarouselController;
