import React, { useState, createContext } from "react";
import { PreviewCarouselCardProps } from "../../components/showcase/carousels/types/previewCarousel";
import {
  NEXT,
  PREV,
  RESET,
  ACTION_TIMEOUT,
} from "../../components/showcase/carousels/utils/constants";

interface PreviewCarouselContextProps {
  nextCloneThumbnailUrl: string;
  nextThumbnailUrl: string;
  nextAlt: string;
  animatedNextThumbnailUrl: string;
  activeThumbnailUrl: string;
  activeAlt: string;
  activePreviewUrl: string;
  activeMuxVideoId: string;
  animatedActiveThumbnailUrl: string;
  prevThumbnailUrl: string;
  prevAlt: string;
  animatedPrevThumbnailUrl: string;
  prevCloneThumbnailUrl: string;
  isAnimated: boolean;
  action: "prev" | "next" | "reset";
  nextAction: React.Dispatch<React.SetStateAction<void>>;
  prevAction: React.Dispatch<React.SetStateAction<void>>;
  isVideoVisible: boolean;
  setIsVideoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PreviewCarouselContext =
  createContext<PreviewCarouselContextProps | null>(null);

interface PreviewCarouselContextProviderProps {
  cardConfig: PreviewCarouselCardProps[];
}

export const PreviewCarouselContextProvider: React.FC<
  PreviewCarouselContextProviderProps & React.PropsWithChildren
> = ({ cardConfig, children }) => {
  const cardConfigLength = cardConfig.length;

  const determineNext = (index: number) =>
    index === 0 ? cardConfigLength - 1 : index - 1;

  const determinePrev = (index: number) =>
    index === cardConfigLength - 1 ? 0 : index + 1;

  const [nextCloneIndex, setNextCloneIndex] = useState(cardConfigLength - 1);
  const [nextIndex, setNextIndex] = useState(0);
  const [animatedNextIndex, setAnimatedNextIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [animatedActiveIndex, setAnimatedActiveIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(2);
  const [animatedPrevIndex, setAnimatedPrevIndex] = useState(2);
  const [prevCloneIndex, setPrevCloneIndex] = useState(determinePrev(2));
  const [isAnimated, setIsAnimated] = useState(false);
  const [action, setAction] = useState<"prev" | "next" | "reset">("reset");
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const nextAction = () => {
    setIsAnimated(true);
    setAction(NEXT);
    setNextIndex(determineNext(nextIndex));
    setActiveIndex(determineNext(activeIndex));
    setPrevIndex(determineNext(prevIndex));
    setTimeout(() => {
      setIsAnimated(false);
      setAction(RESET);
      setAnimatedNextIndex(determineNext(nextIndex));
      setAnimatedActiveIndex(determineNext(activeIndex));
      setAnimatedPrevIndex(determineNext(prevIndex));
      setNextCloneIndex(determineNext(nextCloneIndex));
      setPrevCloneIndex(determineNext(prevCloneIndex));
    }, ACTION_TIMEOUT);
  };

  const prevAction = () => {
    setIsAnimated(true);
    setAction(PREV);
    setNextIndex(determinePrev(nextIndex));
    setActiveIndex(determinePrev(activeIndex));
    setPrevIndex(determinePrev(prevIndex));
    setTimeout(() => {
      setIsAnimated(false);
      setAction(RESET);
      setAnimatedNextIndex(determinePrev(nextIndex));
      setAnimatedActiveIndex(determinePrev(activeIndex));
      setAnimatedPrevIndex(determinePrev(prevIndex));
      setNextCloneIndex(determinePrev(nextCloneIndex));
      setPrevCloneIndex(determinePrev(prevCloneIndex));
    }, ACTION_TIMEOUT);
  };

  const nextCloneThumbnailUrl = cardConfig[nextCloneIndex].thumbnailImageUrl;
  const nextThumbnailUrl = cardConfig[nextIndex].thumbnailImageUrl;
  const nextAlt = cardConfig[nextIndex].videoTitle;
  const animatedNextThumbnailUrl =
    cardConfig[animatedNextIndex].thumbnailImageUrl;
  const activeThumbnailUrl = cardConfig[activeIndex].thumbnailImageUrl;
  const activeAlt = cardConfig[activeIndex].videoTitle;
  const activePreviewUrl = cardConfig[activeIndex].backgroundImageUrl;
  const activeMuxVideoId = cardConfig[activeIndex].muxVideoId;
  const animatedActiveThumbnailUrl =
    cardConfig[animatedActiveIndex].thumbnailImageUrl;
  const prevThumbnailUrl = cardConfig[prevIndex].thumbnailImageUrl;
  const prevAlt = cardConfig[prevIndex].videoTitle;
  const animatedPrevThumbnailUrl =
    cardConfig[animatedPrevIndex].thumbnailImageUrl;
  const prevCloneThumbnailUrl = cardConfig[prevCloneIndex].thumbnailImageUrl;

  const state = {
    nextCloneThumbnailUrl,
    nextThumbnailUrl,
    nextAlt,
    animatedNextThumbnailUrl,
    activeThumbnailUrl,
    activeAlt,
    activePreviewUrl,
    activeMuxVideoId,
    animatedActiveThumbnailUrl,
    prevThumbnailUrl,
    prevAlt,
    animatedPrevThumbnailUrl,
    prevCloneThumbnailUrl,
    isAnimated,
    action,
    nextAction,
    prevAction,
    isVideoVisible,
    setIsVideoVisible,
  };

  return (
    <PreviewCarouselContext.Provider value={state}>
      {children}
    </PreviewCarouselContext.Provider>
  );
};

export default PreviewCarouselContextProvider;
