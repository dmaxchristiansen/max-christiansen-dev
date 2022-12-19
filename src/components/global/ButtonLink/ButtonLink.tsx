import { Link } from "gatsby";
import styled from "styled-components";
import { TWO_FIFTY_MS } from "src/utils/constants/transition-speeds";
import { ROYAL_BLUE, OBSIDIAN } from "src/styles/colors";
import {
  DARK_SHADOW,
  NARROW_BLUE_GLOW,
} from "src/utils/constants/shadow-constants";

interface StyledLinkProps {
  fontSize: string;
  py: string;
  px: string;
}

interface ButtonLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  href: string;
  text: string;
}

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["fontSize", "py", "px"].includes(prop),
})<StyledLinkProps>`
  display: block;
  padding: ${({ py, px }) => `${py} ${px}`};
  box-shadow: ${DARK_SHADOW};
  background-color: ${ROYAL_BLUE};
  border-radius: 16px;
  font-weight: 900;
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  text-decoration: none;
  transition: box-shadow ${TWO_FIFTY_MS}, background-color ${TWO_FIFTY_MS};
  &:hover {
    box-shadow: ${NARROW_BLUE_GLOW};
    background-color: ${OBSIDIAN};
  }
  &:focus {
    box-shadow: ${NARROW_BLUE_GLOW};
    background-color: ${OBSIDIAN};
  }
`;

const ButtonLink: React.FC<ButtonLinkProps & StyledLinkProps> = ({
  href,
  text,
  fontSize,
  py,
  px,
  className,
}) => (
  <StyledLink
    className={className}
    to={href}
    fontSize={fontSize}
    py={py}
    px={px}
  >
    {text}
  </StyledLink>
);

export default ButtonLink;
