import styled, { css } from "styled-components";
import { Link } from "gatsby";
import useHandleScroll from "src/utils/hooks/useHandleScroll";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { ROYAL_BLUE, OBSIDIAN } from "src/styles/colors";
import {
  NARROW_BLUE_GLOW,
  DARK_SHADOW,
} from "src/utils/constants/shadow-constants";
import { Z_FIVE_HUNDRED } from "src/utils/constants/layer-constants";

interface VisibilityProps {
  isVisible: boolean;
}

interface TypographyProps {
  desktopFontSize: string;
  mobileFontSize?: string;
}

interface LayoutProps {
  isTopAligned?: boolean;
  padding?: string;
}

interface FixedLinkProps extends TypographyProps, LayoutProps {
  scrollReactionThreshold: number;
  href: string;
  text: string;
}

const FixedWrapper = styled.div<LayoutProps>`
  display: flex;
  position: fixed;
  ${({ isTopAligned }) =>
    isTopAligned
      ? css`
          bottom: 0;
          height: calc(100% - 52px);
        `
      : css`
          top: 0;
          height: calc(100% - 66px);
          @media (max-width: 767px) {
            height: calc(100% - 30px);
          }
        `}
  width: 100%;
  pointer-events: none;
  z-index: ${Z_FIVE_HUNDRED};
`;

const InternalWrapper = styled.div<LayoutProps>`
  display: flex;
  justify-content: flex-end;
  align-items: ${({ isTopAligned }) =>
    isTopAligned ? "flex-start" : "flex-end"};
  width: 100%;
  max-width: 1350px;
  margin: 0 auto 0 auto;
  padding: 0 30px;
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop =>
    !["isVisible", "desktopFontSize", "mobileFontSize", "padding"].includes(
      prop,
    ),
})<VisibilityProps & TypographyProps & LayoutProps>`
  padding: ${({ padding }) => padding};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  background-color: ${ROYAL_BLUE};
  border-radius: 5px;
  box-shadow: ${DARK_SHADOW};
  text-decoration: none;
  font-size: ${({ desktopFontSize }) => desktopFontSize};
  line-height: 1;
  cursor: pointer;
  pointer-events: all;
  transition-duration: ${FIVE_HUNDRED_MS}, ${FIVE_HUNDRED_MS}, ${TWO_FIFTY_MS},
    ${TWO_FIFTY_MS};
  transition-property: opacity, visibility, background-color, box-shadow;
  @media (max-width: 767px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
  }
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: ${NARROW_BLUE_GLOW};
  }
`;

const FixedLink: React.FC<FixedLinkProps> = ({
  isTopAligned = false,
  scrollReactionThreshold,
  href,
  text,
  desktopFontSize,
  mobileFontSize,
  padding = "14px",
}) => {
  const isVisible = useHandleScroll(scrollReactionThreshold);

  return (
    <FixedWrapper isTopAligned={isTopAligned}>
      <InternalWrapper isTopAligned={isTopAligned}>
        <StyledLink
          isVisible={isVisible}
          to={href}
          desktopFontSize={desktopFontSize}
          mobileFontSize={mobileFontSize}
          padding={padding}
        >
          {text}
        </StyledLink>
      </InternalWrapper>
    </FixedWrapper>
  );
};

export default FixedLink;
