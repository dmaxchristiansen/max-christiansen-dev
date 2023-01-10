import { useState, useEffect } from "react";

const useHandleScroll = (scrollReactionThreshold: number) => {
  const [isScrolledToThreshold, setIsScrolledToThreshold] = useState(false);

  const handleScroll = () => {
    setIsScrolledToThreshold(scrollReactionThreshold <= window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return isScrolledToThreshold;
};

export default useHandleScroll;
