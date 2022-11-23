import { keyframes } from "styled-components";

export const FORWARD_KEYFRAMES = keyframes`
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const BACKWARD_KEYFRAMES = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const CONTAINER_MAX_WIDTH = 1350;

export const IMAGE_MAX_WIDTH = 128;
export const IMAGE_WRAPPER_PADDING_X = 60;

const DEFAULT_LOGOS_BLOCK_WIDTH = 2037;
const DEFAULT_ANIMATION_DURATION = 50;

export const IMAGE_BLOCK_PIXEL_TRANSLATE_X_PER_SECOND =
  DEFAULT_LOGOS_BLOCK_WIDTH / DEFAULT_ANIMATION_DURATION;
