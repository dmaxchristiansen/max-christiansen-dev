import styled from "styled-components";
import useHandleScroll from "src/utils/hooks/useHandleScroll";
import { ROYAL_BLUE, OBSIDIAN, WHITE, CLEAR } from "src/styles/colors";
import {
  NARROW_BLUE_GLOW,
  DARK_SHADOW,
} from "src/utils/constants/shadow-constants";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { Z_FIVE_HUNDRED } from "src/utils/constants/layer-constants";

const SCROLL_REACTION_THRESHOLD = 680;

interface VisibilityProps {
  isVisible: boolean;
}

const FixedWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: calc(100% - 66px);
  width: 100%;
  pointer-events: none;
  z-index: ${Z_FIVE_HUNDRED};
  @media (max-width: 767px) {
    height: calc(100% - 30px);
  }
`;

const InternalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Link = styled.a<VisibilityProps>`
  padding: 13px 12px 14px;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  background-color: ${ROYAL_BLUE};
  border-radius: 5px;
  box-shadow: ${DARK_SHADOW};
  text-decoration: none;
  cursor: pointer;
  pointer-events: all;
  transition-duration: ${FIVE_HUNDRED_MS}, ${FIVE_HUNDRED_MS}, ${TWO_FIFTY_MS},
    ${TWO_FIFTY_MS};
  transition-property: opacity, visibility, background-color, box-shadow;
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: ${NARROW_BLUE_GLOW};
  }
  @media (max-width: 767px) {
    padding: 12px 11px 13px;
  }
`;

const ArrowPoint = styled.div`
  width: 0px;
  height: 0px;
  border-left: 14px solid ${CLEAR};
  border-right: 14px solid ${CLEAR};
  border-bottom: 12px solid ${WHITE};
  @media (max-width: 767px) {
    border-left: 12px solid ${CLEAR};
    border-right: 12px solid ${CLEAR};
    border-bottom: 10px solid ${WHITE};
  }
`;

const ArrowBase = styled.div`
  height: 16px;
  width: 12px;
  margin: 0px auto;
  background-color: ${WHITE};
  @media (max-width: 767px) {
    height: 14px;
    width: 8px;
  }
`;

const ScrollTopLink = () => {
  const isVisible = useHandleScroll(SCROLL_REACTION_THRESHOLD);

  return (
    <FixedWrapper>
      <InternalWrapper>
        <Link isVisible={isVisible} href="#" aria-label="scroll to page top">
          <ArrowPoint />
          <ArrowBase />
        </Link>
      </InternalWrapper>
    </FixedWrapper>
  );
};

export default ScrollTopLink;
