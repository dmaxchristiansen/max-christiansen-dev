import { useState } from "react";
import styled from "styled-components";
import { DecentProps } from "src/components/homepage/Work/Accordion/types/accordion";
import { INITIAL_STATE } from "src/components/homepage/Work/Accordion/utils/constants";
import ToggleButton from "src/components/homepage/Work/Accordion/ToggleButton";
import Collapse from "src/components/homepage/Work/Accordion/Collapse";

const Container = styled.div``;

const Accordion: React.FC<DecentProps> = ({ config }) => {
  const [isExpanded, setIsExpanded] = useState(INITIAL_STATE);

  return (
    <>
      {config.map(section => (
        <Container key={section.sectionId}>
          <ToggleButton
            sectionId={section.sectionId}
            position={section.header.position}
            timeframe={section.header.timeframe}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
          <Collapse
            sectionId={section.sectionId}
            location={section.collapse.location}
            link={section.collapse.link}
            description={section.collapse.description}
            graphic={section.collapse.graphic}
            technologies={section.collapse.technologies}
            isExpanded={isExpanded}
          />
        </Container>
      ))}
    </>
  );
};

export default Accordion;
