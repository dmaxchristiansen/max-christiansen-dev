import React, { createContext, useState } from "react";

interface ComponentViewContextProps {
  hasIntroBeenViewed: boolean;
  setHasIntroBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ComponentViewContext = createContext<ComponentViewContextProps>({
  hasIntroBeenViewed: false,
  setHasIntroBeenViewed: () => undefined,
});

const ComponentViewContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [hasIntroBeenViewed, setHasIntroBeenViewed] = useState(false);

  const state = {
    hasIntroBeenViewed,
    setHasIntroBeenViewed,
  };

  return (
    <ComponentViewContext.Provider value={state}>
      {children}
    </ComponentViewContext.Provider>
  );
};

export const wrapWithComponentViewContext = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return <ComponentViewContextProvider>{element}</ComponentViewContextProvider>;
};

export const INTRO_TIMEOUT = 4501;

export default ComponentViewContextProvider;
