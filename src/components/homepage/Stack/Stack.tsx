import { forwardRef, useContext, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  FIVE_HUNDRED_MS,
  SIX_THOUSAND_MS,
  FIFTEEN_HUNDRED_MS,
  THREE_THOUSAND_MS,
  FORTY_FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
} from "src/utils/constants/transitions";
import {
  ComponentViewContext,
  STACK_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import GatsbySvg from "src/components/svgs/GatsbySvg/GatsbySvg";
import TypescriptSvg from "src/components/svgs/TypescriptSvg/TypescriptSvg";
import StyledComponentsSvg from "src/components/svgs/StyledComponentsSvg/StyledComponentsSvg";
import NetlifySvg from "src/components/svgs/NetlifySvg/NetlifySvg";
import CtaLink from "../CtaLink/CtaLink";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";

const Container = styled.div`
  margin: 50px 0 70px;
  padding: ${STANDARD_X_PADDING};
  padding-top: 50px;
  @media (max-width: 991px) {
    margin: 30px 0 70px;
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
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${FIVE_HUNDRED_MS};
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

const Stack = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => {
  const componentViewContext = useContext(ComponentViewContext);
  const { setHasStackBeenViewed, hasStackBeenViewed } = componentViewContext;

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHasStackBeenViewed(true);
      }, STACK_TIMEOUT);
    }
  });

  return (
    <Container id="stack" ref={ref}>
      <SectionHeader
        text="this site built with"
        inView={inView || hasStackBeenViewed}
      />
      <Row inView={inView || hasStackBeenViewed}>
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
      <CtaLink
        text="checkout repo"
        destination="https://github.com/dmaxchristiansen/max-christiansen-dev"
        transitionDelay={ONE_THOUSAND_MS}
        isExternal
        inView={inView || hasStackBeenViewed}
      />
    </Container>
  );
});

export default Stack;
