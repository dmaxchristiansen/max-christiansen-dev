import { useState, useRef } from "react";
import styled from "styled-components";
import { SingleProps } from "./types/videoCarousel";
import useHandleEscapeKeypress from "./utils/useHandleEscapeKeypress";
import MuxVideo from "@mux/mux-video-react";
import { Quote, Attribution, Title } from "./utils/constants";
import QuotationMark from "./QuotationMark";
import PlayButton from "./PlayButton";
import CloseButton from "./CloseButton";
import VideoPreviewImage from "./VideoPreviewImage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 32px 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 32px 64px 40px;
  }
  @media (min-width: 992px) {
    padding: 0 64px 64px;
  }
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 35%;
    margin-bottom: 0;
    padding-right: 24px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  @media (min-width: 768px) {
    width: 65%;
  }
`;

const Single: React.FC<SingleProps> = ({ slide, isBackgroundDark }) => {
  const { attribution, title, quote, videoPreviewImageUrl, videoPlaybackId } =
    slide;

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useHandleEscapeKeypress(videoRef, () => setIsVideoVisible(false));

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
    <Container>
      <CopyContainer>
        <QuotationMark isWhite={isBackgroundDark} />
        <Quote>{quote}</Quote>
        <Attribution>{attribution}</Attribution>
        <Title>{title}</Title>
      </CopyContainer>
      <VideoContainer>
        <VideoPreviewImage
          backgroundUrl={videoPreviewImageUrl}
          isVisible={!isVideoVisible}
        >
          <PlayButton
            isButtonFocusable={!isVideoVisible}
            attribution={attribution}
            onButtonClick={() => handlePlayButtonClick()}
          />
        </VideoPreviewImage>
        <MuxVideo
          ref={videoRef}
          width="100%"
          playbackId={videoPlaybackId}
          poster={videoPreviewImageUrl}
          streamType="on-demand"
          controls={isVideoVisible}
          loop
          playsInline
        />
        <CloseButton
          isButtonFocusable={isVideoVisible}
          videoRef={videoRef}
          onButtonClick={() => setIsVideoVisible(false)}
        />
      </VideoContainer>
    </Container>
  );
};

export default Single;
