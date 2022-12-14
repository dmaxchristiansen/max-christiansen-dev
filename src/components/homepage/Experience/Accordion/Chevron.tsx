import styled from "styled-components";
import { WHITE } from "src/styles/colors";
import { MEDIUM } from "src/utils/constants/transition-speeds";
import {
  SectionIdProps,
  AccordionStateProps,
} from "src/components/homepage/Experience/Accordion/types/accordion";
import { ACCORDION_TRANSITION_TIMING } from "./utils/constants";

interface ChevronProps {
  isExpanded: AccordionStateProps;
}

const StyledSvg = styled.svg<SectionIdProps & ChevronProps>`
  transform: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform ${MEDIUM} ${ACCORDION_TRANSITION_TIMING};
`;

const Chevron: React.FC<SectionIdProps & ChevronProps> = ({
  sectionId,
  isExpanded,
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="none"
    stroke={WHITE}
    strokeWidth={3}
    strokeLinecap="round"
    sectionId={sectionId}
    isExpanded={isExpanded}
  >
    <polyline points="6 9 12 15 18 9" />
  </StyledSvg>
);

export default Chevron;
