import styled from "styled-components";
import { MEDIUM } from "src/utils/constants/transition-speeds";
import { CAROUSEL_VIDEO_PREVIEW_Z_INDEX } from "src/utils/constants/layer-constants";

export interface VideoPreviewImageProps {
  backgroundUrl: string;
  isVisible: boolean;
}

const VideoPreview = styled.div<VideoPreviewImageProps>`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? "0%" : "-105%")};
  width: 100%;
  height: 100%;
  z-index: ${CAROUSEL_VIDEO_PREVIEW_Z_INDEX};
  border-radius: 16px;
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-size: cover;
  transition: top ${MEDIUM} ease-in-out;
`;

const VideoPreviewImage: React.FC<
  VideoPreviewImageProps & React.PropsWithChildren
> = ({ backgroundUrl, isVisible, children }) => (
  <VideoPreview backgroundUrl={backgroundUrl} isVisible={isVisible}>
    {children}
  </VideoPreview>
);

export default VideoPreviewImage;
