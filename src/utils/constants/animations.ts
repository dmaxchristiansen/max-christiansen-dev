import { keyframes } from "styled-components";
import { BLUE_EYES, OBSIDIAN } from "src/styles/colors";
import { NARROW_BLUE_GLOW, DARK_SHADOW } from "./shadows";

export const BLUE_SHADOW_AND_TEXT_GLOW_KEYFRAMES = keyframes`
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

export const BLUE_TEXT_GLOW_KEYFRAMES = keyframes`
  0% {
    text-shadow: 0 0 2px ${OBSIDIAN}, 0 0 6px ${BLUE_EYES};
  }
  50% {
    text-shadow: 0 0 2px ${OBSIDIAN}, 0 0 6px ${BLUE_EYES}, 0 0 18px ${BLUE_EYES};
  }
  100% {
    text-shadow: 0 0 2px ${OBSIDIAN}, 0 0 6px ${BLUE_EYES};
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

export const OPACITY_KEYFRAMES = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OPACITY_FADE = "0.75";
