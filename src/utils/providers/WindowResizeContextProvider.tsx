import React, { createContext, useEffect, useState } from "react";

export interface WindowResizeContextValues {
  windowWidth: number;
  windowHeight: number;
}

export const WindowResizeContext = createContext<WindowResizeContextValues>({
  windowWidth: 0,
  windowHeight: 0,
});

const WindowResizeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleWindowResize = (e: Event) => {
    const target = e.target as Window;
    setWindowWidth(target.innerWidth);
    setWindowHeight(target.innerWidth);
  };

  const value = {
    windowWidth,
    windowHeight,
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <WindowResizeContext.Provider value={value}>
      {children}
    </WindowResizeContext.Provider>
  );
};

export const wrapWithWindowResizeContext = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return <WindowResizeContextProvider>{element}</WindowResizeContextProvider>;
};

export default WindowResizeContextProvider;
