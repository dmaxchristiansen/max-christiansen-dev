import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useHandleEscapeKeypress from "../../utils/useHandleEscapeKeypress";
import MuxVideo from "@mux/mux-video-react";
import PlayButton from "../../sharedComponents/PlayButton/PlayButton";
import CloseButton from "../../sharedComponents/CloseButton/CloseButton";
import VideoPreviewImage from "../../sharedComponents/VideoPreviewImage/VideoPreviewImage";

interface SlideProps {
  isSlideActive: boolean;
  videoPlaybackId: string;
  videoPreviewImageUrl: string;
  attribution: string;
}

const SlideWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 16px;
`;

const Slide: React.FC<SlideProps> = ({
  isSlideActive,
  videoPlaybackId,
  videoPreviewImageUrl,
  attribution,
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useHandleEscapeKeypress(videoRef, () => setIsVideoVisible(false));

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible && !isSlideActive) {
        videoRef.current.pause();
        setIsVideoVisible(false);
      }
    }
  }, [isVideoVisible, isSlideActive]);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      setIsVideoVisible(true);
      videoRef.current
        .play()
        .then(_ => {
          console.log("Video playback successful");
        })
        .catch(error => {
          console.log("Error: Video playback issue", error);
        });
    }
  };

  return (
    <SlideWrapper>
      <VideoPreviewImage
        backgroundUrl={videoPreviewImageUrl}
        isVisible={!isVideoVisible}
      >
        <PlayButton
          isButtonFocusable={!isVideoVisible && isSlideActive}
          attribution={attribution}
          onButtonClick={() => handlePlayButtonClick()}
        />
      </VideoPreviewImage>
      <MuxVideo
        ref={videoRef}
        width="100%"
        playbackId={videoPlaybackId}
        streamType="on-demand"
        poster={videoPreviewImageUrl}
        controls={isVideoVisible}
        loop
        playsInline
      />
      <CloseButton
        isButtonFocusable={isVideoVisible}
        videoRef={videoRef}
        onButtonClick={() => setIsVideoVisible(false)}
      />
    </SlideWrapper>
  );
};

export default Slide;
