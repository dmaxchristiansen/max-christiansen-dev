import { keyframes } from "styled-components";
import { HOT_PINK } from "src/styles/colors";

export const TEXT_GLOW_KEYFRAMES = keyframes`
  0% {
    text-shadow: 0 0 16px ${HOT_PINK}, 0 0 18px ${HOT_PINK};
  }
  50% {
    text-shadow: 0 0 32px ${HOT_PINK}, 0 0 48px ${HOT_PINK};
  }
  100% {
    text-shadow: 0 0 16px ${HOT_PINK}, 0 0 18px ${HOT_PINK};
  }
`;

export const SPIN_KEYFRAMES = keyframes`
  from { 
    transform: rotateY(0deg); 
  }
  to { 
    transform: rotateY(360deg);
  }
`;

export const OPACITY_FADE = "0.75";