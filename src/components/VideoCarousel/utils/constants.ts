import styled, { css, keyframes } from "styled-components";

export const NEXT = "next";
export const PREV = "prev";
export const RESET = "reset";

export const VIDEO_TRANSITION_SPEED = "500ms";

export const SLIDE_ANIMATION_SPEED = "250ms";

export const ACTION_TIMEOUT = 250;

export const ACTION_KEYFRAMES = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NAV_BUTTON_ROW_Z_INDEX = "10";
const NAV_BUTTON_BOX_SHADOW = "0 0 8px 0 rgba(0, 0, 0, 0.3)";

export const BUTTON_OPACITY_FADE = "0.75";
export const BUTTON_TRANSITION_SPEED = "200ms";

export const SHARED_NAV_BUTTON_ROW_STYLES = css`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: ${NAV_BUTTON_ROW_Z_INDEX};
`;

export const SHARED_NAV_BUTTON_STYLES = css`
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${NAV_BUTTON_BOX_SHADOW};
  transition: background ${BUTTON_TRANSITION_SPEED};
`;

export const Quote = styled.p`
  margin: 16px 0 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  @media (min-width: 768px) {
    margin: 32px 0 32px;
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 26px;
  }
`;

export const Attribution = styled.p`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

export const Title = styled.p`
  margin: 0;
`;
