import React, { useState } from "react";
import { AccordionProps } from "src/components/homepage/Experience/Accordion/types/accordion";
import { INITIAL_STATE } from "src/components/homepage/Experience/Accordion/utils/constants";
import ToggleButton from "src/components/homepage/Experience/Accordion/ToggleButton/ToggleButton";
import Collapse from "src/components/homepage/Experience/Accordion/Collapse/Collapse";

const Accordion: React.FC<AccordionProps> = ({ config }) => {
  const [isExpanded, setIsExpanded] = useState(INITIAL_STATE);

  return (
    <>
      {config.map(section => (
        <React.Fragment key={section.sectionId}>
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
            setIsExpanded={setIsExpanded}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Accordion;
