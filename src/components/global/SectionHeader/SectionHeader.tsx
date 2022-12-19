import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { FOUR_FIFTY_MS } from "src/utils/constants/transition-speeds";
import { Z_TWENTY } from "src/utils/constants/layer-constants";

interface TransitionProps {
  delayTransition?: boolean;
}

interface SectionHeaderProps extends TransitionProps {
  text: string;
}

const Header = styled.h1<TransitionProps & InViewProps>`
  position: relative;
  margin: 0;
  text-align: center;
  font-size: 80px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  z-index: ${Z_TWENTY};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${({ delayTransition }) =>
    delayTransition ? "250ms" : "0s"};
  @media (max-width: 991px) {
    font-size: 70px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const SectionHeader: React.FC<SectionHeaderProps & InViewProps> = ({
  text,
  inView,
  delayTransition = false,
}) => (
  <Header inView={inView} delayTransition={delayTransition}>
    {text}
  </Header>
);

export default SectionHeader;
