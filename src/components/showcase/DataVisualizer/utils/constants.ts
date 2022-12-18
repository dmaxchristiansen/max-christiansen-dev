import { keyframes } from "styled-components";

export const BAR_ANIMATION_START_HEIGHT = "45px";

export const BAR_ANIMATION_DURATION = "1.2s";
export const BAR_ANIMATION_DELAY = "0.3s";

export const METRIC_ANIMATION_DELAY = "2s";

export const METRIC_KEYFRAMES = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HEADER_COPY_ANIMATION_DURATION = "2s";

export const HEADER_COPY_KEYFRAMES = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const BAR_BACKGROUND_DARK_BLUE = "#32797b";
export const BAR_BACKGROUND_LIGHT_BLUE = "#519ea4";
export const BAR_BACKGROUND_PINK = "#e96d77";
