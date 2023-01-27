import styled, { css } from "styled-components";
import { Z_TEN } from "src/utils/constants/layers";
import { BLACK } from "src/utils/constants/colors";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import { LIGHT_SHADOW } from "src/utils/constants/shadows";

export const NEXT = "next";
export const PREV = "prev";
export const RESET = "reset";

export const ACTION_TIMEOUT = 250;

export const SHARED_NAV_BUTTON_ROW_STYLES = css`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: ${Z_TEN};
`;

export const SHARED_NAV_BUTTON_STYLES = css`
  padding: 0;
  border: none;
  border-radius: 4px;
  color: ${BLACK};
  cursor: pointer;
  box-shadow: ${LIGHT_SHADOW};
  transition: background ${TWO_FIFTY_MS};
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