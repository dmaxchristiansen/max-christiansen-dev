import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  CollapseProps,
  SectionIdProps,
  AccordionStateProps,
} from "src/components/homepage/Experience/Accordion/types/accordion";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import {
  GRIMACE,
  OBSIDIAN,
  ROYAL_BLUE,
  PEACHY,
} from "src/utils/constants/colors";
import { ACCORDION_TRANSITION_TIMING } from "../utils/constants";
import { DARK_SHADOW } from "src/utils/constants/shadows";
import LocationSvg from "src/components/svgs/LocationSvg/LocationSvg";
import NewTabLinkSvg from "src/components/svgs/NewTabLinkSvg/NewTabLinkSvg";

interface ContainerProps {
  isExpanded: AccordionStateProps;
}

interface ToggleButtonProps extends ContainerProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<AccordionStateProps>>;
}

const Container = styled.div<SectionIdProps & ContainerProps>`
  max-height: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "500px" : "10px"};
  width: calc(100% + 20px);
  margin-left: -10px;
  visibility: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "visible" : "hidden"};
  opacity: ${({ sectionId, isExpanded }) =>
    isExpanded[sectionId] ? "1" : "0"};
  overflow: hidden;
  transition-property: max-height, opacity, visibility;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-timing-function: ${ACCORDION_TRANSITION_TIMING};
  @media (max-width: 767px) {
    max-height: ${({ sectionId, isExpanded }) =>
      isExpanded[sectionId] ? "940px" : "10px"};
  }
`;

const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 20px auto;
  @media (max-width: 520px) {
    margin: 15px auto;
  }
`;

const InternalWrapper = styled.div`
  padding: 20px 25px;
  background-color: ${GRIMACE};
  box-shadow: ${DARK_SHADOW};
  border-radius: 5px;
  @media (max-width: 520px) {
    padding: 12px 16px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const LeftCol = styled.div``;

const InfoList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 16px;
  font-family: Roboto Mono;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;

const LocationItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 30px 0 0;
  padding: 0;
  @media (max-width: 767px) {
    margin: 12px 0 14px 0;
  }
`;

const LocationText = styled.div`
  margin: 0 0 0 10px;
  font-family: Roboto Mono;
  font-size: 18px;
  line-height: 1;
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  display: flex;
  margin: 0 0 0 10px;
  font-family: Roboto Mono;
  font-size: 18px;
  line-height: 1;
  text-decoration: none;
`;

const DescriptionList = styled.ul`
  padding-left: 20px;
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;

const DescriptorItem = styled.li`
  margin-bottom: 6px;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100px;
  margin: 16px 0px 16px 8px;
  @media (max-width: 767px) {
    margin: 0;
  }
`;

const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 4px 0 0;
  padding: 0;
  list-style-type: none;
`;

const TechnologyItem = styled.li`
  margin: 0 4px 8px;
  padding: 10px 16px 11px;
  background-color: ${ROYAL_BLUE};
  border-radius: 16px;
  font-family: Roboto Mono;
  line-height: 16px;
  @media (max-width: 520px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const CloseButtonRow = styled.div`
  display: none;
  @media (max-width: 520px) {
    display: flex;
    justify-content: center;
    margin: 16px 0px 12px;
  }
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: ${OBSIDIAN};
  border: 2px solid ${ROYAL_BLUE};
  border-radius: 5px;
  box-shadow: ${DARK_SHADOW};
  font-weight: 900;
  letter-spacing: 4px;
`;

const Collapse: React.FC<
  CollapseProps & SectionIdProps & ContainerProps & ToggleButtonProps
> = ({
  sectionId,
  location,
  link,
  description,
  graphic,
  technologies,
  isExpanded,
  setIsExpanded,
}) => {
  const toggleCollapse = (sectionId: keyof AccordionStateProps) => {
    setIsExpanded(prevState => ({
      ...prevState,
      [sectionId]: !isExpanded[sectionId],
    }));
  };

  return (
    <Container id={sectionId} sectionId={sectionId} isExpanded={isExpanded}>
      <Wrapper>
        <InternalWrapper>
          <TopRow>
            <LeftCol>
              <InfoList>
                <LocationItem>
                  <LocationSvg />
                  <LocationText>{location}</LocationText>
                </LocationItem>
                <LinkItem>
                  <NewTabLinkSvg fillColor={PEACHY} />
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
            </LeftCol>
            <RightCol>
              <img
                src={graphic.src}
                alt={graphic.altText}
                style={{ width: "100%" }}
              />
            </RightCol>
          </TopRow>
          <TechnologyList>
            {technologies.map(technology => (
              <TechnologyItem key={uuidv4()}>{technology}</TechnologyItem>
            ))}
          </TechnologyList>
          <CloseButtonRow>
            <CloseButton
              type="button"
              aria-expanded={isExpanded[sectionId]}
              aria-controls={sectionId}
              onClick={() => toggleCollapse(sectionId)}
            >
              CLOSE
            </CloseButton>
          </CloseButtonRow>
        </InternalWrapper>
      </Wrapper>
    </Container>
  );
};

export default Collapse;
