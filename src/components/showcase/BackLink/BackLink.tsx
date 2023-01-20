import { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transitions";
import { ROYAL_BLUE, OBSIDIAN } from "src/utils/constants/colors";
import { NARROW_BLUE_GLOW, DARK_SHADOW } from "src/utils/constants/shadows";
import { Z_FIVE_HUNDRED } from "src/utils/constants/layers";
import {
  STANDARD_WIDTH,
  STANDARD_X_PADDING,
} from "src/utils/constants/layouts";

interface VisibilityProps {
  isVisible: boolean;
}

const FixedWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  width: 100%;
  pointer-events: none;
  z-index: ${Z_FIVE_HUNDRED};
`;

const InternalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
  padding: ${STANDARD_X_PADDING};
`;

const StyledLink = styled(Link)<VisibilityProps>`
  padding: 10px;
  background-color: ${ROYAL_BLUE};
  border-radius: 5px;
  box-shadow: ${DARK_SHADOW};
  text-decoration: none;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  pointer-events: all;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: background-color ${TWO_FIFTY_MS}, box-shadow ${TWO_FIFTY_MS},
    opacity ${FIVE_HUNDRED_MS} ${ONE_THOUSAND_MS};
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: ${NARROW_BLUE_GLOW};
    @media (max-width: 991px) {
      background-color: ${ROYAL_BLUE};
      box-shadow: ${DARK_SHADOW};
    }
  }
`;

const BackLink = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  return (
    <FixedWrapper>
      <InternalWrapper>
        <StyledLink isVisible={isMounted} to="/showcase/components">
          &larr;&nbsp;components
        </StyledLink>
      </InternalWrapper>
    </FixedWrapper>
  );
};

export default BackLink;
