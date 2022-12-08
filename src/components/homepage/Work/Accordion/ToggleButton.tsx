import styled from "styled-components";
import {
  HeaderProps,
  IdProps,
  AccordionStateProps,
} from "src/components/homepage/Work/Accordion/types/accordion";
import Chevron from "src/components/homepage/Work/Accordion/Chevron";

interface ToggleButtonProps {
  isExpanded: AccordionStateProps;
  setIsExpanded: React.Dispatch<React.SetStateAction<AccordionStateProps>>;
}

const Button = styled.button``;

const Header = styled.h3`
  display: flex;
  justify-content: space-between;
`;

const ToggleButton: React.FC<HeaderProps & IdProps & ToggleButtonProps> = ({
  sectionId,
  position,
  timeframe,
  isExpanded,
  setIsExpanded,
}) => {
  const toggleCollapse = (sectionId: keyof AccordionStateProps) => {
    setIsExpanded({
      ...isExpanded,
      [sectionId]: !isExpanded[sectionId],
    });
  };

  return (
    <Button onClick={() => toggleCollapse(sectionId)}>
      <Header>
        <span>{position}</span>
        <span>{timeframe}</span>
      </Header>
      <Chevron sectionId={sectionId} isExpanded={isExpanded} />
    </Button>
  );
};

export default ToggleButton;
