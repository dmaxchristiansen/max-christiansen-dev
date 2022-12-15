import styled from "styled-components";
import {
  HeaderProps,
  SectionIdProps,
  AccordionStateProps,
} from "src/components/homepage/Experience/Accordion/types/accordion";
import { GRIMACE_LIGHTLY, PURPLE_HAZE } from "src/styles/colors";
import { FIVE_HUNDRED } from "src/utils/constants/transition-speeds";
import { ACCORDION_TRANSITION_TIMING } from "./utils/constants";
import { DARK_SHADOW } from "src/utils/constants/shadow-constants";
import Chevron from "src/components/homepage/Experience/Accordion/Chevron";

interface ButtonProps {
  isExpanded: AccordionStateProps;
}

interface ToggleButtonProps extends ButtonProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<AccordionStateProps>>;
}

const Button = styled.button<SectionIdProps & ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  width: 100%;
  padding: 20px 25px;
  text-align: left;
  border: none;
  border-radius: 5px;
  background-color: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? PURPLE_HAZE : GRIMACE_LIGHTLY};
  box-shadow: ${DARK_SHADOW};
  cursor: pointer;
  transition: background-color ${FIVE_HUNDRED} ${ACCORDION_TRANSITION_TIMING};
  @media (max-width: 520px) {
    padding: 12px 16px;
  }
`;

const Header = styled.h3`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 15px 0 0;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 991px) {
    align-items: center;
  }
  @media (max-width: 520px) {
    font-size: 16px;
  }
`;

const TimeframeSpan = styled.span`
  @media (max-width: 991px) {
    max-width: 50px;
    margin-left: 15px;
  }
  @media (max-width: 520px) {
    max-width: 40px;
  }
`;

const DashSpan = styled.span`
  @media (max-width: 991px) {
    display: none;
  }
`;

const ToggleButton: React.FC<
  HeaderProps & SectionIdProps & ToggleButtonProps
> = ({ sectionId, position, timeframe, isExpanded, setIsExpanded }) => {
  const toggleCollapse = (sectionId: keyof AccordionStateProps) => {
    setIsExpanded(prevState => ({
      ...prevState,
      [sectionId]: !isExpanded[sectionId],
    }));
  };

  return (
    <Button
      type="button"
      aria-expanded={isExpanded[sectionId]}
      aria-controls={sectionId}
      sectionId={sectionId}
      isExpanded={isExpanded}
      onClick={() => toggleCollapse(sectionId)}
    >
      <Header>
        <span>{position}</span>
        <TimeframeSpan>
          {timeframe.begin} <DashSpan>-</DashSpan> {timeframe.end}
        </TimeframeSpan>
      </Header>
      <Chevron sectionId={sectionId} isExpanded={isExpanded} />
    </Button>
  );
};

export default ToggleButton;
