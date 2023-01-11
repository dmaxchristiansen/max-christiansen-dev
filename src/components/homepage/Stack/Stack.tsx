import { forwardRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  FOUR_FIFTY_MS,
  TWO_FIFTY_MS,
  SIX_THOUSAND_MS,
  FIFTEEN_HUNDRED_MS,
  THREE_THOUSAND_MS,
  FORTY_FIVE_HUNDRED_MS,
} from "src/utils/constants/transition-speeds";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import GatsbySvg from "src/components/svgs/GatsbySvg";
import TypescriptSvg from "src/components/svgs/TypescriptSvg";
import StyledComponentsSvg from "src/components/svgs/StyledComponentsSvg";
import NetlifySvg from "src/components/svgs/NetlifySvg";

const Container = styled.div`
  padding: 0 30px;
  margin: 200px 0 70px;
  @media (max-width: 991px) {
    margin: 120px 0 70px;
  }
`;

const Row = styled.div<InViewProps>`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 50px auto 0;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${TWO_FIFTY_MS};
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  perspective: 1000px;
  padding: 10px;
  overflow: hidden;
`;

const timedYSpinKeyframes = keyframes`
  0% { 
    transform: rotateY(0deg); 
  }
  12.5% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SharedSvgWrapperStyles = css`
  animation: ${timedYSpinKeyframes} ${SIX_THOUSAND_MS} linear infinite;
`;

const GatsbySvgWrapper = styled.div`
  ${SharedSvgWrapperStyles}
`;

const TypescriptSvgWrapper = styled.div`
  ${SharedSvgWrapperStyles}
  animation-delay: ${FIFTEEN_HUNDRED_MS};
`;

const StyledComponentsSvgWrapper = styled.div`
  ${SharedSvgWrapperStyles}
  animation-delay: ${THREE_THOUSAND_MS};
`;

const NetlifySvgWrapper = styled.div`
  ${SharedSvgWrapperStyles}
  animation-delay: ${FORTY_FIVE_HUNDRED_MS};
`;

const Stack = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => (
  <Container ref={ref}>
    <SectionHeader text="this site built with" inView={inView} />
    <Row inView={inView}>
      <SvgContainer>
        <GatsbySvgWrapper>
          <GatsbySvg />
        </GatsbySvgWrapper>
      </SvgContainer>
      <SvgContainer>
        <TypescriptSvgWrapper>
          <TypescriptSvg />
        </TypescriptSvgWrapper>
      </SvgContainer>
      <SvgContainer>
        <StyledComponentsSvgWrapper>
          <StyledComponentsSvg />
        </StyledComponentsSvgWrapper>
      </SvgContainer>
      <SvgContainer>
        <NetlifySvgWrapper>
          <NetlifySvg />
        </NetlifySvgWrapper>
      </SvgContainer>
    </Row>
  </Container>
));

export default Stack;
