import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { FOUR_FIFTY_MS } from "src/utils/constants/transition-speeds";
import { Z_TWENTY } from "src/utils/constants/layer-constants";

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
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  z-index: ${Z_TWENTY};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${({ transitionDelay }) =>
    transitionDelay ? transitionDelay : "0s"};
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
  inView,
  transitionDelay,
  textAlign = "center",
}) => (
  <Header
    inView={inView}
    textAlign={textAlign}
    transitionDelay={transitionDelay}
  >
    {text}
  </Header>
);

export default SectionHeader;
