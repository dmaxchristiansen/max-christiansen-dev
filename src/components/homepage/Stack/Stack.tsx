import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  FOUR_FIFTY_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import GatsbySvg from "src/components/svgs/GatsbySvg";
import TypescriptSvg from "src/components/svgs/TypescriptSvg";
import StyledComponentsSvg from "src/components/svgs/StyledComponentsSvg";
import NetlifySvg from "src/components/svgs/NetlifySvg";

const Container = styled.div`
  padding: 0 30px;
  margin: 200px 0 80px;
  @media (max-width: 991px) {
    margin: 120px 0 80px;
  }
`;

const Row = styled.div<InViewProps>`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 60px auto 0;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${TWO_FIFTY_MS};
`;

const Stack = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => (
  <Container ref={ref}>
    <SectionHeader text="this site is built with" inView={inView} />
    <Row inView={inView}>
      <GatsbySvg />
      <TypescriptSvg />
      <StyledComponentsSvg />
      <NetlifySvg />
    </Row>
  </Container>
));

export default Stack;
