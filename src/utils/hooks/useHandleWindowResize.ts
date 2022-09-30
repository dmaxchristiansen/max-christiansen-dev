import { useState, useEffect, useContext } from "react";
import { WindowResizeContext } from "../providers/WindowResizeContextProvider";

type ResizeCallback = (width: number, _height: number) => boolean;

const useHandleWindowResize = (resizeCallback: ResizeCallback) => {
  const windowResizeContext = useContext(WindowResizeContext);
  const [isWindowWidthBelowThreshold, setIsWindowWidthBelowThreshold] =
    useState(false);

  useEffect(() => {
    setIsWindowWidthBelowThreshold(
      resizeCallback(
        windowResizeContext.windowWidth,
        windowResizeContext.windowHeight,
      ),
    );
  }, [windowResizeContext, resizeCallback]);

  return isWindowWidthBelowThreshold;
};

export const mobileWidthThreshold = 768;

// Convenience function to handle window resizing that falls below the provided threshold value.
export const isLessThanWidthThreshold = (widthThreshold: number) => {
  return (width: number, _height: number) => width <= widthThreshold;
};

export const isGreaterThanWidthThreshold = (widthThreshold: number) => {
  return (width: number, _height: number) => width >= widthThreshold;
};

export default useHandleWindowResize;
