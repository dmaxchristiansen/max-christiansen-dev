import { INITIAL_STATE } from "src/components/homepage/Work/Accordion/utils/constants";

export interface SectionIdProps {
  sectionId: keyof AccordionStateProps;
}

export interface HeaderProps {
  position: string;
  timeframe: {
    begin: string;
    end: string;
  };
}

export interface CollapseProps {
  location: string;
  link: {
    text: string;
    href: string;
  };
  description: string[];
  graphic: {
    src: string;
    altText: string;
  };
  technologies: string[];
}

export interface SectionProps extends SectionIdProps {
  header: HeaderProps;
  collapse: CollapseProps;
}

export interface AccordionProps {
  config: SectionProps[];
}

export type AccordionStateProps = typeof INITIAL_STATE;
