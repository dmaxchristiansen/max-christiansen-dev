import React, { createContext, useState } from "react";

export interface ComponentViewProps {
  hasBeenViewed: boolean;
}

interface ComponentViewContextProps {
  hasIntroBeenViewed: boolean;
  setHasIntroBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasExpertiseBeenViewed: boolean;
  setHasExpertiseBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasExperienceBeenViewed: boolean;
  setHasExperienceBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasStackBeenViewed: boolean;
  setHasStackBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ComponentViewContext = createContext<ComponentViewContextProps>({
  hasIntroBeenViewed: false,
  setHasIntroBeenViewed: () => undefined,
  hasExpertiseBeenViewed: false,
  setHasExpertiseBeenViewed: () => undefined,
  hasExperienceBeenViewed: false,
  setHasExperienceBeenViewed: () => undefined,
  hasStackBeenViewed: false,
  setHasStackBeenViewed: () => undefined,
});

const ComponentViewContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [hasIntroBeenViewed, setHasIntroBeenViewed] = useState(false);
  const [hasExpertiseBeenViewed, setHasExpertiseBeenViewed] = useState(false);
  const [hasExperienceBeenViewed, setHasExperienceBeenViewed] = useState(false);
  const [hasStackBeenViewed, setHasStackBeenViewed] = useState(false);

  const state = {
    hasIntroBeenViewed,
    setHasIntroBeenViewed,
    hasExpertiseBeenViewed,
    setHasExpertiseBeenViewed,
    hasExperienceBeenViewed,
    setHasExperienceBeenViewed,
    hasStackBeenViewed,
    setHasStackBeenViewed,
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
export const EXPERTISE_TIMEOUT = 2001;

export default ComponentViewContextProvider;
