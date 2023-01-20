import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
// import { ComponentViewProps } from "src/utils/providers/ComponentViewContextProvider";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import { Z_TWENTY } from "src/utils/constants/layers";

interface StyleProps {
  textAlign?: string;
  transitionDelay?: string;
}

interface SectionHeaderProps extends StyleProps {
  text: string;
}

const Header = styled.h1<StyleProps & InViewProps>`
  position: relative;
  margin: 0;
  text-align: ${({ textAlign }) => textAlign};
  font-size: 80px;
  z-index: ${Z_TWENTY};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${({ transitionDelay }) =>
    transitionDelay ? transitionDelay : "none"};
  @media (max-width: 991px) {
    font-size: 70px;
  }
  @media (max-width: 767px) {
    font-size: 56px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const SectionHeader: React.FC<SectionHeaderProps & InViewProps> = ({
  text,
  transitionDelay,
  textAlign = "center",
  inView,
}) => (
  <Header
    textAlign={textAlign}
    transitionDelay={transitionDelay}
    inView={inView}
  >
    {text}
  </Header>
);

export default SectionHeader;
