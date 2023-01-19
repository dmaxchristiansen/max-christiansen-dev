import React, { createContext, useState } from "react";

interface ComponentViewContextProps {
  hasIntroBeenViewed: boolean;
  setHasIntroBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasExpertiseBeenViewed: boolean;
  setHasExpertiseBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasExperienceBeenViewed: boolean;
  setHasExperienceBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasStackBeenViewed: boolean;
  setHasStackBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasShowcaseBeenViewed: boolean;
  setHasShowcaseBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
  hasContactBeenViewed: boolean;
  setHasContactBeenViewed: React.Dispatch<React.SetStateAction<boolean>>;
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
  hasShowcaseBeenViewed: false,
  setHasShowcaseBeenViewed: () => undefined,
  hasContactBeenViewed: false,
  setHasContactBeenViewed: () => undefined,
});

const ComponentViewContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [hasIntroBeenViewed, setHasIntroBeenViewed] = useState(false);
  const [hasExpertiseBeenViewed, setHasExpertiseBeenViewed] = useState(false);
  const [hasExperienceBeenViewed, setHasExperienceBeenViewed] = useState(false);
  const [hasStackBeenViewed, setHasStackBeenViewed] = useState(false);
  const [hasShowcaseBeenViewed, setHasShowcaseBeenViewed] = useState(false);
  const [hasContactBeenViewed, setHasContactBeenViewed] = useState(false);

  const state = {
    hasIntroBeenViewed,
    setHasIntroBeenViewed,
    hasExpertiseBeenViewed,
    setHasExpertiseBeenViewed,
    hasExperienceBeenViewed,
    setHasExperienceBeenViewed,
    hasStackBeenViewed,
    setHasStackBeenViewed,
    hasShowcaseBeenViewed,
    setHasShowcaseBeenViewed,
    hasContactBeenViewed,
    setHasContactBeenViewed,
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
export const EXPERTISE_TIMEOUT = 2501;
export const EXPERIENCE_TIMEOUT = 1501;
export const STACK_TIMEOUT = 751;
export const SHOWCASE_TIMEOUT = 6501;
export const CONTACT_TIMEOUT = 2001;

export default ComponentViewContextProvider;
