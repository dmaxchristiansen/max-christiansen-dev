import { Link } from "gatsby";
import styled from "styled-components";
import { MEDIUM } from "src/utils/constants/transition-speeds";
import { BLUE_EYES, PEACHY, PURPLE_HAZE, HOT_PINK } from "src/styles/colors";

interface ButtonLinkProps {
  href: string;
  text: string;
}

interface StyledLinkProps {
  fontSize: string;
  py: string;
  px: string;
}

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["fontSize", "py", "px"].includes(prop),
})<StyledLinkProps>`
  padding: ${({ py, px }) => `${py} ${px}`};
  box-shadow: 0 0 24px 6px ${BLUE_EYES};
  background-color: ${BLUE_EYES};
  border: 2px solid ${PEACHY};
  border-radius: 16px;
  color: ${PURPLE_HAZE};
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  text-decoration: none;
  transition: color, background-color, box-shadow;
  transition-duration: ${MEDIUM};
  &:hover {
    box-shadow: 0 0 48px 12px ${HOT_PINK};
    background-color: ${PURPLE_HAZE};
    color: ${HOT_PINK};
  }
`;

const ButtonLink: React.FC<ButtonLinkProps & StyledLinkProps> = ({
  href,
  text,
  fontSize,
  py,
  px,
}) => (
  <StyledLink to={href} fontSize={fontSize} py={py} px={px}>
    {text}
  </StyledLink>
);

export default ButtonLink;
