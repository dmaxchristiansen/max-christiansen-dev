import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/components/homepage/types/homepage";
import { accordionConfig } from "src/components/homepage/Work/Accordion/utils/accordionConfig";
import SectionHeader from "src/components/homepage/SectionHeader";
import Accordion from "src/components/homepage/Work/Accordion/Accordion";

const Container = styled.div`
  padding: 0 30px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 991px) {
  }
`;

const Work = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => (
  <Container id="work" ref={ref}>
    <Wrapper>
      <SectionHeader text="Professional Experience" inView={inView} />
      <Accordion config={accordionConfig} />
    </Wrapper>
  </Container>
));
export default Work;
