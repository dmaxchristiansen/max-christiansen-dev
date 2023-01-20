import { HeightProps } from "src/utils/types/height";

interface NewTabLinkSvgProps extends HeightProps {
  fillColor: string;
}

const NewTabLinkSvg: React.FC<NewTabLinkSvgProps> = ({
  fillColor,
  height = 24,
}) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    fill={fillColor}
    focusable="false"
  >
    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
  </svg>
);

export default NewTabLinkSvg;
