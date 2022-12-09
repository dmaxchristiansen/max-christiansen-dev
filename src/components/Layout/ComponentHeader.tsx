import styled from "styled-components";
import { BLUE_SKY, HOT_PINK } from "src/styles/colors";

interface ComponentHeaderProps {
  text: string;
}

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  color: ${BLUE_SKY};
  font-family: "Mr Dafoe";
  font-size: 120px;
  text-shadow: 0 0 16px ${HOT_PINK}, 0 0 18px ${HOT_PINK};
  @media (max-width: 991px) {
    font-size: 80px;
    line-height: 1;
  }
`;

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ text }) => (
  <H1>{text}</H1>
);

export default ComponentHeader;
