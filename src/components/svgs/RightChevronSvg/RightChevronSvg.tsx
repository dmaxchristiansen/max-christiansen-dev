import { BLACK } from "src/utils/constants/colors";

const RightChevronSvg = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48px"
    height="48px"
    focusable="false"
  >
    <title>Right Chevron</title>
    <g>
      <g>
        <polyline
          fill="none"
          id="Right"
          points="8.5 5 15.5 12 8.5 19"
          stroke={BLACK}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </g>
  </svg>
);

export default RightChevronSvg;
