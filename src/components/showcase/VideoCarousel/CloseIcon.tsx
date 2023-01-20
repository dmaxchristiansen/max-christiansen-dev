import styled from "styled-components";
import { WHITE } from "src/utils/constants/colors";

const CloseSvg = styled.svg`
  display: block;
  width: 30px;
  height: 30px;
`;

const CloseIcon = () => (
  <CloseSvg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.5846 3.35425L26.6471 0.416748L15.0013 12.0626L3.35547 0.416748L0.417969 3.35425L12.0638 15.0001L0.417969 26.6459L3.35547 29.5834L15.0013 17.9376L26.6471 29.5834L29.5846 26.6459L17.9388 15.0001L29.5846 3.35425Z"
      fill={WHITE}
    />
  </CloseSvg>
);

export default CloseIcon;
