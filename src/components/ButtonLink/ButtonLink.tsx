import { Link } from "gatsby";
import styled from "styled-components";

const TRANSITION_SPEED = "500ms";

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
  padding: 15px 25px;
  padding: ${({ py, px }) => `${py} ${px}`};
  box-shadow: 0 0 24px 6px #00a1ef;
  background-color: #00a1ef;
  border: 2px solid #ff61af;
  border-radius: 16px;
  color: #8313e7;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  text-decoration: none;
  transition: color, background-color, box-shadow;
  transition-duration: ${TRANSITION_SPEED};
  &:hover {
    box-shadow: 0 0 48px 12px #fe05e1;
    background-color: #8313e7;
    color: #fe05e1;
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
