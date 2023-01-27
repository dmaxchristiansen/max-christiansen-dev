import styled from "styled-components";
import { WHITE } from "src/utils/constants/colors";

const StyledSvg = styled.svg`
  height: 50px;
  width: 50px;
  @media (min-width: 768px) {
    height: 76px;
    width: 76px;
  }
`;

const PlaySvg = () => (
  <StyledSvg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="77"
    height="77"
    fill={WHITE}
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
    />
    <path d="M16 12L10 16.3301V7.66987L16 12Z" />
  </StyledSvg>
);

export default PlaySvg;
