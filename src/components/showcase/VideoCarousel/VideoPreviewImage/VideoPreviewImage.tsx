import styled from "styled-components";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import { Z_TEN } from "src/utils/constants/layers";

export interface VideoPreviewImageProps {
  backgroundUrl: string;
  isVisible: boolean;
}

const VideoPreview = styled.div<VideoPreviewImageProps>`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? "0%" : "-105%")};
  width: 100%;
  height: 100%;
  z-index: ${Z_TEN};
  border-radius: 16px;
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-size: cover;
  transition: top ${FIVE_HUNDRED_MS} ease-in-out;
`;

const VideoPreviewImage: React.FC<
  VideoPreviewImageProps & React.PropsWithChildren
> = ({ backgroundUrl, isVisible, children }) => (
  <VideoPreview backgroundUrl={backgroundUrl} isVisible={isVisible}>
    {children}
  </VideoPreview>
);

export default VideoPreviewImage;
