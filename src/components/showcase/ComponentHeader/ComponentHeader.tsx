import styled from "styled-components";
import { BLUE_SKY } from "src/styles/colors";

interface ComponentHeaderProps {
  text: string;
}

const H1 = styled.h1`
  margin: 50px 0;
  padding: 0 30px;
  text-align: center;
  font-size: 110px;
  line-height: 1;
  text-shadow: 0 0 16px ${BLUE_SKY}, 0 0 18px ${BLUE_SKY};
  @media (max-width: 991px) {
    font-size: 90px;
  }
  @media (max-width: 767px) {
    font-size: 70px;
  }
`;

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ text }) => (
  <H1>{text}</H1>
);

export default ComponentHeader;
