import { keyframes } from "styled-components";
import { HOT_PINK, BLUE_EYES } from "src/styles/colors";
import { NARROW_BLUE_GLOW, DARK_SHADOW } from "./shadow-constants";

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

export const BLUE_SHADOW_GLOW_KEYFRAMES = keyframes`
  0% {
    box-shadow: ${DARK_SHADOW};
  }
  50% {
    box-shadow: ${NARROW_BLUE_GLOW};
    text-shadow: 0 0 16px ${BLUE_EYES}, 0 0 18px ${BLUE_EYES};
  }
  100% {
    box-shadow: ${DARK_SHADOW};
  }
`;

export const Y_SPIN_KEYFRAMES = keyframes`
  from { 
    transform: rotateY(0deg); 
  }
  to { 
    transform: rotateY(360deg);
  }
`;

export const WHEEL_SPIN_KEYFRAMES = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg);
  }
`;

export const OPACITY_FADE = "0.75";
