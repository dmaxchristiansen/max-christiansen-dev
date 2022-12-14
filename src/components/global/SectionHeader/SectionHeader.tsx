import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { EX_MEDIUM } from "src/components/homepage/Expertise/utils/constants";

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
  z-index: 20;
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${EX_MEDIUM};
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
