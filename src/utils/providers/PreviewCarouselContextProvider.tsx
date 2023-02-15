import React, { useState, createContext } from "react";
import { PreviewCarouselCardProps } from "../../components/showcase/carousels/types/previewCarousel";
import {
  NEXT,
  PREV,
  RESET,
  ACTION_TIMEOUT,
} from "../../components/showcase/carousels/utils/constants";

interface PreviewCarouselContextProps {
  muxVideoId: string;
  activeIndex: number;
  activePreviewUrl: string;
  activeThumbnailUrl: string;

  activeAlt: string;

  secondThumbnailUrl: string;
  secondPreviewUrl: string;

  secondAlt: string;

  thirdThumbnailUrl: string;
  thirdPreviewUrl: string;

  thirdAlt: string;

  animatedActiveThumbnailUrl: string;
  animatedActivePreviewUrl: string;
  animatedSecondThumbnailUrl: string;
  animatedSecondPreviewUrl: string;
  animatedThirdThumbnailUrl: string;
  nextCloneThumbnailUrl: string;
  nextClonePreviewUrl: string;
  prevCloneThumbnailUrl: string;
  prevClonePreviewUrl: string;
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

  const [isAnimated, setIsAnimated] = useState(false);

  const [action, setAction] = useState<"prev" | "next" | "reset">("reset");

  const [activeIndex, setActiveIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);

  const [animatedActiveIndex, setAnimatedActiveIndex] = useState(0);
  const [animatedSecondIndex, setAnimatedSecondIndex] = useState(1);
  const [animatedThirdIndex, setAnimatedThirdIndex] = useState(2);

  const [nextCloneIndex, setNextCloneIndex] = useState(cardConfigLength - 1);
  const [prevCloneIndex, setPrevCloneIndex] = useState(determinePrev(2));

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const nextAction = () => {
    setIsAnimated(true);
    setAction(NEXT);
    setActiveIndex(determineNext(activeIndex));
    setSecondIndex(determineNext(secondIndex));
    setThirdIndex(determineNext(thirdIndex));
    setTimeout(() => {
      setIsAnimated(false);
      setAction(RESET);
      setAnimatedActiveIndex(determineNext(activeIndex));
      setAnimatedSecondIndex(determineNext(secondIndex));
      setAnimatedThirdIndex(determineNext(thirdIndex));
      setNextCloneIndex(determineNext(nextCloneIndex));
      setPrevCloneIndex(determineNext(prevCloneIndex));
    }, ACTION_TIMEOUT);
  };

  const prevAction = () => {
    setIsAnimated(true);
    setAction(PREV);
    setActiveIndex(determinePrev(activeIndex));
    setSecondIndex(determinePrev(secondIndex));
    setThirdIndex(determinePrev(thirdIndex));
    setTimeout(() => {
      setIsAnimated(false);
      setAction(RESET);
      setAnimatedActiveIndex(determinePrev(activeIndex));
      setAnimatedSecondIndex(determinePrev(secondIndex));
      setAnimatedThirdIndex(determinePrev(thirdIndex));
      setNextCloneIndex(determinePrev(nextCloneIndex));
      setPrevCloneIndex(determinePrev(prevCloneIndex));
    }, ACTION_TIMEOUT);
  };

  const muxVideoId = cardConfig[activeIndex].muxVideoId;

  const activePreviewUrl = cardConfig[activeIndex].backgroundImageUrl;
  const activeThumbnailUrl = cardConfig[activeIndex].thumbnailImageUrl;

  const activeAlt = cardConfig[activeIndex].videoTitle;

  const secondThumbnailUrl = cardConfig[secondIndex].thumbnailImageUrl;
  const secondPreviewUrl = cardConfig[secondIndex].backgroundImageUrl;

  const secondAlt = cardConfig[secondIndex].videoTitle;

  const thirdThumbnailUrl = cardConfig[thirdIndex].thumbnailImageUrl;
  const thirdPreviewUrl = cardConfig[thirdIndex].backgroundImageUrl;

  const thirdAlt = cardConfig[thirdIndex].videoTitle;

  const animatedActiveThumbnailUrl =
    cardConfig[animatedActiveIndex].thumbnailImageUrl;
  const animatedActivePreviewUrl =
    cardConfig[animatedActiveIndex].backgroundImageUrl;

  const animatedSecondThumbnailUrl =
    cardConfig[animatedSecondIndex].thumbnailImageUrl;
  const animatedSecondPreviewUrl =
    cardConfig[animatedSecondIndex].backgroundImageUrl;

  const animatedThirdThumbnailUrl =
    cardConfig[animatedThirdIndex].thumbnailImageUrl;

  const nextCloneThumbnailUrl = cardConfig[nextCloneIndex].thumbnailImageUrl;
  const nextClonePreviewUrl = cardConfig[nextCloneIndex].backgroundImageUrl;

  const prevCloneThumbnailUrl = cardConfig[prevCloneIndex].thumbnailImageUrl;
  const prevClonePreviewUrl = cardConfig[prevCloneIndex].backgroundImageUrl;

  const state = {
    muxVideoId,
    activeIndex,
    activePreviewUrl,
    activeThumbnailUrl,

    activeAlt,

    secondThumbnailUrl,
    secondPreviewUrl,

    secondAlt,

    thirdThumbnailUrl,
    thirdPreviewUrl,

    thirdAlt,

    animatedActiveThumbnailUrl,
    animatedActivePreviewUrl,
    animatedSecondThumbnailUrl,
    animatedSecondPreviewUrl,
    animatedThirdThumbnailUrl,
    nextCloneThumbnailUrl,
    nextClonePreviewUrl,
    prevCloneThumbnailUrl,
    prevClonePreviewUrl,
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
