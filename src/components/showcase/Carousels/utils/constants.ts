import { css } from "styled-components";
import {
  BLACK,
  WHITE_SMOKE,
  GRAY_DAY,
  STORM_CLOUD,
} from "src/utils/constants/colors";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { LIGHT_SHADOW } from "src/utils/constants/shadows";

export const NEXT = "next";
export const PREV = "prev";
export const RESET = "reset";

export const ACTION_TIMEOUT = 250;

export const SHARED_NAV_BUTTON_STYLES = css`
  position: absolute;
  top: calc(50% - 18px);
  height: 36px;
  width: 36px;
  padding: 0;
  background-color: ${WHITE_SMOKE};
  border: none;
  border-radius: 5px;
  box-shadow: ${LIGHT_SHADOW};
  cursor: pointer;
  transition: background-color ${TWO_FIFTY_MS};
  &:before {
    position: absolute;
    top: -2px;
    font-size: 36px;
    font-family: Consolas;
    color: ${BLACK};
  }
  @media (min-width: 768px) {
    top: calc(50% - 24px);
    height: 48px;
    width: 48px;
    &:before {
      font-size: 48px;
    }
  }
`;

export const SLIDER_NAV_BUTTON_STYLES = css`
  &:hover:enabled {
    background-color: ${GRAY_DAY};
  }
  &:disabled {
    background-color: ${STORM_CLOUD};
    cursor: auto;
  }
`;

export const CAROUSEL_NAV_BUTTON_STYLES = css`
  &:hover {
    background-color: ${GRAY_DAY};
  }
`;

export const PREV_NAV_BUTTON_STYLES = css`
  left: 0;
  &:before {
    content: "<";
    left: 20%;
  }
`;

export const NEXT_NAV_BUTTON_STYLES = css`
  right: 0;
  &:before {
    content: ">";
    right: 20%;
  }
`;
