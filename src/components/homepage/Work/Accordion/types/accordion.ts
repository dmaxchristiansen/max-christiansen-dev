import { INITIAL_STATE } from "src/components/homepage/Work/Accordion/utils/constants";

export interface IdProps {
  sectionId: "foundry" | "dojo" | "hills";
}

export interface HeaderProps {
  position: string;
  timeframe: string;
}

export interface CollapseProps {
  location: string;
  link: {
    text: string;
    href: string;
  };
  description: string[];
  graphic: string;
  technologies: string[];
}

export interface SectionProps {
  sectionId: "foundry" | "dojo" | "hills";
  header: HeaderProps;
  collapse: CollapseProps;
}

export interface AccordionProps {
  config: SectionProps[];
}

export type AccordionStateProps = typeof INITIAL_STATE;

export interface DecentProps {
  config: {
    sectionId: "foundry" | "dojo" | "hills";
    header: {
      position: string;
      timeframe: string;
    };
    collapse: {
      location: string;
      link: {
        text: string;
        href: string;
      };
      description: string[];
      graphic: string;
      technologies: string[];
    };
  }[];
}
