import styled from "styled-components";
import { WHITE } from "src/styles/colors";
import { MEDIUM } from "src/utils/constants/transition-speeds";
import {
  SectionIdProps,
  AccordionStateProps,
} from "src/components/homepage/Experience/Accordion/types/accordion";

interface ChevronProps {
  isExpanded: AccordionStateProps;
}

const StyledSvg = styled.svg<SectionIdProps & ChevronProps>`
  height: 15px;
  width: 15px;
  transform: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform ${MEDIUM};
`;

const Chevron: React.FC<SectionIdProps & ChevronProps> = ({
  sectionId,
  isExpanded,
}) => (
  <StyledSvg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    sectionId={sectionId}
    isExpanded={isExpanded}
  >
    <path
      d="M0 7.33L2.829 4.5l9.175 9.339L21.171 4.5 24 7.33 12.004 19.5z"
      fill={WHITE}
    />
  </StyledSvg>
);

export default Chevron;
