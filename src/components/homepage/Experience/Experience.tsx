import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { accordionConfig } from "src/components/homepage/Experience/Accordion/utils/accordionConfig";
import {
  FOUR_FIFTY_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import Accordion from "src/components/homepage/Experience/Accordion/Accordion";

const Container = styled.div`
  margin-top: 50px;
  padding: 50px 30px 0;
  @media (max-width: 520px) {
    margin-top: 30px;
    padding-top: 60px;
  }
`;

const AccordionWrapper = styled.div<InViewProps>`
  max-width: 800px;
  margin: 80px auto 0;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${TWO_FIFTY_MS};
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Experience = forwardRef<HTMLDivElement, InViewProps>(
  ({ inView }, ref) => (
    <Container id="experience" ref={ref}>
      <SectionHeader text="Professional Experience" inView={inView} />
      <AccordionWrapper inView={inView}>
        <Accordion config={accordionConfig} />
      </AccordionWrapper>
    </Container>
  ),
);

export default Experience;
