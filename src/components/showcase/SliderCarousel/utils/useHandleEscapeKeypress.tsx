import { useEffect } from "react";

const useHandleEscapeKeypress = (
  videoRef: React.MutableRefObject<HTMLVideoElement | null>,
  onEscapeKeypress: () => void,
) => {
  const handleEscapeKeypress = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onEscapeKeypress();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeypress);
    return () => document.removeEventListener("keydown", handleEscapeKeypress);
  });
};

export default useHandleEscapeKeypress;
