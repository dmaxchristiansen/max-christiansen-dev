import { WHITE } from "src/utils/constants/colors";
import { HeightProps } from "src/utils/types/height";

const ResumeSvg: React.FC<HeightProps> = ({ height = 30 }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    height={height}
    fill={WHITE}
    focusable="false"
  >
    <title>Resume Document</title>
    <path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />{" "}
  </svg>
);

export default ResumeSvg;
