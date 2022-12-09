import ComputerSvg from "src/components/homepage/Expertise/svg-components/ComputerSvg";
import ReactSvg from "src/components/homepage/Expertise/svg-components/ReactSvg";
import BrainSvg from "src/components/homepage/Expertise/svg-components/BrainSvg";
import { HOT_PINK, BLUE_SKY, PURPLE_HAZE } from "src/styles/colors";

export const colConfig = [
  {
    index: 0,
    SvgComponent: ComputerSvg,
    topLineText: "Software",
    bottomLineText: "Development",
    contentText:
      "Highly proficient in both functional and OOP. Experienced with JavaScript, TypeScript, Python, Java, and Ruby.",
    backgroundColor: HOT_PINK,
  },
  {
    index: 1,
    SvgComponent: ReactSvg,
    topLineText: "Frontend Dev",
    bottomLineText: "React, Gatsby",
    contentText:
      "Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS/TS, React and GatsbyJS frameworks.",
    backgroundColor: BLUE_SKY,
  },
  {
    index: 2,
    SvgComponent: BrainSvg,
    topLineText: "High EQ &",
    bottomLineText: "Communication",
    contentText:
      "An empathetic and compassionate leader who expressed solid logical, analytical, and critical reasoning skills.",
    backgroundColor: PURPLE_HAZE,
  },
];
