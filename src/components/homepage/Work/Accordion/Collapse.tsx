import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  CollapseProps,
  IdProps,
  AccordionStateProps,
} from "src/components/homepage/Work/Accordion/types/accordion";

interface FooProps {
  isExpanded: AccordionStateProps;
}

const Container = styled.div<IdProps & FooProps>`
  display: flex;
  max-height: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "500px" : "0"};
  overflow: hidden;
  transition: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId]
      ? "max-height 1s ease-in"
      : "max-height 0.5s cubic-bezier(0, 1, 0, 1), margin-bottom 0s 0.5s"};
`;

const LeftCol = styled.div``;

const InfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const LocationItem = styled.li`
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 0;
  padding: 0;
`;

const Link = styled.a``;

const DescriptionList = styled.ul``;

const DescriptorItem = styled.li``;

const TechnologyList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const TechnologyItem = styled.li`
  margin: 0;
  padding: 0;
`;

const RightCol = styled.div``;

const Collapse: React.FC<CollapseProps & IdProps & FooProps> = ({
  sectionId,
  isExpanded,
  location,
  link,
  description,
  graphic,
  technologies,
}) => (
  <Container sectionId={sectionId} isExpanded={isExpanded}>
    <LeftCol>
      <InfoList>
        <LocationItem>{location}</LocationItem>
        <LinkItem>
          <Link href={link.href} target="_blank" rel="noreferrer">
            {link.text}
          </Link>
        </LinkItem>
      </InfoList>
      <DescriptionList>
        {description.map(descriptor => (
          <DescriptorItem key={uuidv4()}>{descriptor}</DescriptorItem>
        ))}
      </DescriptionList>
      <TechnologyList>
        {technologies.map(technology => (
          <TechnologyItem key={uuidv4()}>{technology}</TechnologyItem>
        ))}
      </TechnologyList>
    </LeftCol>
    <RightCol>
      <img src={graphic} alt="" style={{ maxWidth: 100 }} />
    </RightCol>
  </Container>
);

export default Collapse;
