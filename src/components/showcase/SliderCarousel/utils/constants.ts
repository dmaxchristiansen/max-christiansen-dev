import { css } from "styled-components";
import { WHITE_SMOKE, GRAY_DAY, STORM_CLOUD } from "src/utils/constants/colors";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { LIGHT_SHADOW } from "src/utils/constants/shadows";

export const NEXT = "next";
export const PREV = "prev";
export const RESET = "reset";

export const ACTION_TIMEOUT = 250;

export const SHARED_NAV_BUTTON_STYLES = css`
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 0;
  background-color: ${WHITE_SMOKE};
  border: none;
  border-radius: 5px;
  box-shadow: ${LIGHT_SHADOW};
  cursor: pointer;
  line-height: 1.1;
  transition: background-color ${TWO_FIFTY_MS};
  @media (min-width: 768px) {
    top: calc(50% - 24px);
    height: 48px;
    width: 48px;
    line-height: 1.05;
    &:before {
      font-size: 48px;
    }
  }
`;

export const SLIDER_NAV_BUTTON_STYLES = css`
  top: calc(50% - 18px);
  &:hover:enabled {
    background-color: ${GRAY_DAY};
  }
  &:disabled {
    background-color: ${STORM_CLOUD};
    cursor: auto;
  }
`;

export const CAROUSEL_NAV_BUTTON_STYLES = css`
  bottom: calc(12.5% - 18px);
  &:hover {
    background-color: ${GRAY_DAY};
  }
`;
