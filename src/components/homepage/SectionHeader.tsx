import styled from "styled-components";
import { InViewProps } from "src/components/homepage/types/homepage";
import { EX_MEDIUM } from "src/components/homepage/Expertise/utils/constants";

interface SectionHeaderProps {
  text: string;
}

const Header = styled.h1<InViewProps>`
  text-align: center;
  font-size: 80px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${EX_MEDIUM};
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const SectionHeader: React.FC<SectionHeaderProps & InViewProps> = ({
  text,
  inView,
}) => <Header inView={inView}>{text}</Header>;

export default SectionHeader;
