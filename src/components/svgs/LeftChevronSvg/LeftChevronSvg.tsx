import { BLACK } from "src/utils/constants/colors";

const LeftChevronSvg = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
  >
    <title>Left Chevron</title>
    <g>
      <g>
        <polyline
          fill="none"
          points="15.5 5 8.5 12 15.5 19"
          stroke={BLACK}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </g>
  </svg>
);

export default LeftChevronSvg;
