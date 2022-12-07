import styled from "styled-components";

interface SectionHeaderProps {
  text: string;
}

const Header = styled.h1`
  text-align: center;
  font-size: 80px;
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    font-size: 44px;
  }
`;

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => (
  <Header>{text}</Header>
);

export default SectionHeader;
