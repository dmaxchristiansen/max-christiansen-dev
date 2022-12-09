import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/components/homepage/types/homepage";
import { accordionConfig } from "src/components/homepage/Work/Accordion/utils/accordionConfig";
import { EX_MEDIUM } from "src/components/homepage/Expertise/utils/constants";
import SectionHeader from "src/components/homepage/SectionHeader";
import Accordion from "src/components/homepage/Work/Accordion/Accordion";

const Container = styled.div`
  margin-top: 50px;
  padding: 0 30px;
  @media (max-width: 520px) {
    margin-top: 100px;
  }
`;

const AccordionWrapper = styled.div<InViewProps>`
  max-width: 800px;
  margin: 80px auto 0;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${EX_MEDIUM};
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Work = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => (
  <Container id="work" ref={ref}>
    <SectionHeader text="Professional Experience" inView={inView} />
    <AccordionWrapper inView={inView}>
      <Accordion config={accordionConfig} />
    </AccordionWrapper>
  </Container>
));
export default Work;
