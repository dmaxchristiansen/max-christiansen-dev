import styled from "styled-components";
import { VIDEO_TRANSITION_SPEED } from "./utils/constants";

export interface VideoPreviewImageProps {
  backgroundUrl: string;
  isVisible: boolean;
}

export const VIDEO_PREVIEW_Z_INDEX = "10";

const VideoPreview = styled.div<VideoPreviewImageProps>`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? "0%" : "-105%")};
  width: 100%;
  height: 100%;
  z-index: ${VIDEO_PREVIEW_Z_INDEX};
  border-radius: 16px;
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-size: cover;
  transition: top ${VIDEO_TRANSITION_SPEED} ease-in-out;
`;

const VideoPreviewImage: React.FC<
  VideoPreviewImageProps & React.PropsWithChildren
> = ({ backgroundUrl, isVisible, children }) => (
  <VideoPreview backgroundUrl={backgroundUrl} isVisible={isVisible}>
    {children}
  </VideoPreview>
);

export default VideoPreviewImage;
