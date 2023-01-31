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
  activeQuote: string;
  activeName: string;
  activeTitle: string;
  secondThumbnailUrl: string;
  secondPreviewUrl: string;
  secondAltText: string;
  thirdThumbnailUrl: string;
  thirdPreviewUrl: string;
  thirdAltText: string;
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
  const config = cardConfig;

  const COUNT = config.length;

  const determineNext = (index: number) =>
    index === 0 ? COUNT - 1 : index - 1;

  const determinePrev = (index: number) =>
    index === COUNT - 1 ? 0 : index + 1;

  const [isAnimated, setIsAnimated] = useState(false);

  const [action, setAction] = useState<"prev" | "next" | "reset">("reset");

  const [activeIndex, setActiveIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);

  const [animatedActiveIndex, setAnimatedActiveIndex] = useState(0);
  const [animatedSecondIndex, setAnimatedSecondIndex] = useState(1);
  const [animatedThirdIndex, setAnimatedThirdIndex] = useState(2);

  const [nextCloneIndex, setNextCloneIndex] = useState(COUNT - 1);
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

  const muxVideoId = config[activeIndex].muxVideoId;

  const activePreviewUrl = config[activeIndex].backgroundImageUrl;
  const activeThumbnailUrl = config[activeIndex].thumbnailImageUrl;
  const activeQuote = config[activeIndex].quote;
  const activeTitle = config[activeIndex].title;
  const activeName = config[activeIndex].attribution;

  const secondThumbnailUrl = config[secondIndex].thumbnailImageUrl;
  const secondPreviewUrl = config[secondIndex].backgroundImageUrl;
  const secondAltText = config[secondIndex].attribution;

  const thirdThumbnailUrl = config[thirdIndex].thumbnailImageUrl;
  const thirdPreviewUrl = config[thirdIndex].backgroundImageUrl;
  const thirdAltText = config[thirdIndex].attribution;

  const animatedActiveThumbnailUrl =
    config[animatedActiveIndex].thumbnailImageUrl;
  const animatedActivePreviewUrl =
    config[animatedActiveIndex].backgroundImageUrl;

  const animatedSecondThumbnailUrl =
    config[animatedSecondIndex].thumbnailImageUrl;
  const animatedSecondPreviewUrl =
    config[animatedSecondIndex].backgroundImageUrl;

  const animatedThirdThumbnailUrl =
    config[animatedThirdIndex].thumbnailImageUrl;

  const nextCloneThumbnailUrl = config[nextCloneIndex].thumbnailImageUrl;
  const nextClonePreviewUrl = config[nextCloneIndex].backgroundImageUrl;

  const prevCloneThumbnailUrl = config[prevCloneIndex].thumbnailImageUrl;
  const prevClonePreviewUrl = config[prevCloneIndex].backgroundImageUrl;

  const state = {
    muxVideoId,
    activeIndex,
    activePreviewUrl,
    activeThumbnailUrl,
    activeQuote,
    activeName,
    activeTitle,
    secondThumbnailUrl,
    secondPreviewUrl,
    secondAltText,
    thirdThumbnailUrl,
    thirdPreviewUrl,
    thirdAltText,
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
