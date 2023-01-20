import { WHITE } from "src/utils/constants/colors";

const PlaySvg = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 77 77"
    width="77"
    height="77"
    fill="none"
    focusable="false"
  >
    <path
      d="M34.907 29.3384C33.5754 28.4951 31.8369 29.4518 31.8369 31.0281V46.2677C31.8369 47.8439 33.5754 48.8007 34.907 47.9573L46.9383 40.3375C48.1782 39.5523 48.1782 37.7435 46.9383 36.9583L34.907 29.3384Z"
      fill={WHITE}
    />
    <circle cx="38.5" cy="38.5" r="36.5" stroke={WHITE} strokeWidth="4" />
  </svg>
);

export default PlaySvg;
