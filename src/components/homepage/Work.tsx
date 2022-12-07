import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/components/homepage/types/homepage";
import SectionHeader from "src/components/homepage/SectionHeader";

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
      <div
        style={{ height: "500px", width: "100%", outline: "2px solid #000000" }}
      >
        Placeholder
      </div>
    </Wrapper>
  </Container>
));
export default Work;
