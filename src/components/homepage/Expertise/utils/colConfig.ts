import ComputerSvg from "src/components/svgs/ComputerSvg/ComputerSvg";
import ReactSvg from "src/components/svgs/ReactSvg/ReactSvg";
import BrainSvg from "src/components/svgs/BrainSvg/BrainSvg";
import { HOT_PINK, BLUE_SKY, PURPLE_HAZE } from "src/utils/constants/colors";

export const colConfig = [
  {
    index: 0,
    SvgComponent: ComputerSvg,
    topLineText: "Software",
    bottomLineText: "Engineering",
    contentText:
      "Highly proficient in both functional and OOP. Experienced with JavaScript, TypeScript, Python, C#, Java, and Ruby.",
    backgroundColor: HOT_PINK,
  },
  {
    index: 1,
    SvgComponent: ReactSvg,
    topLineText: "Frontend",
    bottomLineText: "Development",
    contentText:
      "Delivering exceptional UI/UX for over 6 years. Extensive experience in React, Vue, Django, .NET, and Sitecore",
    backgroundColor: BLUE_SKY,
  },
  {
    index: 2,
    SvgComponent: BrainSvg,
    topLineText: "High EQ &",
    bottomLineText: "Communication",
    contentText:
      "An empathetic and compassionate leader who expresses solid logical, analytical, and critical reasoning skills.",
    backgroundColor: PURPLE_HAZE,
  },
];
