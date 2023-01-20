import { forwardRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { accordionConfig } from "src/components/homepage/Experience/Accordion/utils/accordionConfig";
import {
  FIVE_HUNDRED_MS,
  FIFTEEN_HUNDRED_MS,
  TWO_THOUSAND_MS,
} from "src/utils/constants/transitions";
import {
  ComponentViewContext,
  EXPERIENCE_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import Accordion from "src/components/homepage/Experience/Accordion/Accordion";
import CtaLink from "src/components/homepage/CtaLink/CtaLink";
import ChevronScrollButton from "src/components/homepage/ChevronScrollButton/ChevronScrollButton";

const Container = styled.div`
  margin-top: 50px;
  padding: 50px 30px 0;
  @media (max-width: 520px) {
    margin-top: 30px;
    padding-top: 60px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
  @media (max-width: 991px) {
    min-height: unset;
  }
`;

const AccordionWrapper = styled.div<InViewProps>`
  max-width: 800px;
  margin: 40px auto 0;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${FIVE_HUNDRED_MS};
`;

const Experience = forwardRef<HTMLDivElement, InViewProps>(
  ({ inView }, ref) => {
    const componentViewContext = useContext(ComponentViewContext);
    const { setHasExperienceBeenViewed, hasExperienceBeenViewed } =
      componentViewContext;

    useEffect(() => {
      if (inView) {
        setTimeout(() => {
          setHasExperienceBeenViewed(true);
        }, EXPERIENCE_TIMEOUT);
      }
    });

    return (
      <Container id="experience" ref={ref}>
        <Wrapper>
          <SectionHeader
            text="Professional Experience"
            inView={inView || hasExperienceBeenViewed}
          />
          <AccordionWrapper inView={inView || hasExperienceBeenViewed}>
            <Accordion config={accordionConfig} />
          </AccordionWrapper>
          <CtaLink
            text="download resume"
            destination="/max_christiansen_resume.pdf"
            transitionDelay={FIFTEEN_HUNDRED_MS}
            isExternal
            inView={inView || hasExperienceBeenViewed}
          />
          <ChevronScrollButton
            targetElementId="stack"
            targetElementOffsetTopValue={0}
            transitionDelay={TWO_THOUSAND_MS}
            hideOnMobile
            inView={inView || hasExperienceBeenViewed}
          />
        </Wrapper>
      </Container>
    );
  },
);

export default Experience;
