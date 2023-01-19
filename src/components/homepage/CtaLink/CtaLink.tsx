import { Link } from "gatsby";
import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  TWO_FIFTY_MS,
  FIVE_HUNDRED_MS,
} from "src/utils/constants/transition-speeds";
import { Z_TWENTY } from "src/utils/constants/layer-constants";
import { BLUE_EYES } from "src/styles/colors";

interface RenderProps {
  transitionDelay: string;
}

interface CtaLinkProps extends RenderProps, InViewProps {
  text: string;
  destination: string;
  isExternal?: boolean;
}

const LinkWrapper = styled.div<InViewProps & RenderProps>`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 40px;
  z-index: ${Z_TWENTY};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${({ transitionDelay }) => transitionDelay};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AnchorLink = styled.a`
  text-decoration: none;
`;

const LinkText = styled.div`
  font-family: Roboto Mono;
  font-size: 24px;
  line-height: 1;
  transition: color ${TWO_FIFTY_MS};
  &:hover {
    color: ${BLUE_EYES};
  }
  @media (max-width: 520px) {
    font-size: 20px;
  }
`;

const CtaLink: React.FC<CtaLinkProps> = ({
  text,
  destination,
  isExternal = false,
  transitionDelay,
  inView,
}) => (
  <LinkWrapper transitionDelay={transitionDelay} inView={inView}>
    {isExternal ? (
      <AnchorLink href={destination} target="_blank">
        <LinkText>&gt;&gt;&nbsp;{text}&nbsp;&lt;&lt;</LinkText>
      </AnchorLink>
    ) : (
      <StyledLink to={destination}>
        <LinkText>&gt;&gt;&nbsp;{text}&nbsp;&lt;&lt;</LinkText>
      </StyledLink>
    )}
  </LinkWrapper>
);

export default CtaLink;
