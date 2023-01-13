import { forwardRef } from "react";
import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import { accordionConfig } from "src/components/homepage/Experience/Accordion/utils/accordionConfig";
import {
  FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { BLUE_EYES } from "src/styles/colors";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import Accordion from "src/components/homepage/Experience/Accordion/Accordion";
import ResumeSvg from "src/components/svgs/ResumeSvg";

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
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_FIFTY_MS};
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
const LinkWrapper = styled.div<InViewProps>`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${FIVE_HUNDRED_MS} ${ONE_THOUSAND_MS};
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  div {
    transition: color ${TWO_FIFTY_MS};
  }
  svg {
    transition: fill ${TWO_FIFTY_MS};
  }
  &:hover {
    svg {
      fill: ${BLUE_EYES};
    }
    div {
      color: ${BLUE_EYES};
    }
  }
`;

const LinkText = styled.div`
  font-family: Roboto Mono;
  font-size: 28px;
  line-height: 1;
  transition: text-shadow ${TWO_FIFTY_MS};
  @media (max-width: 520px) {
    font-size: 20px;
  }
`;

const Experience = forwardRef<HTMLDivElement, InViewProps>(
  ({ inView }, ref) => (
    <Container id="experience" ref={ref}>
      <SectionHeader text="Professional Experience" inView={inView} />
      <AccordionWrapper inView={inView}>
        <Accordion config={accordionConfig} />
      </AccordionWrapper>
      <LinkWrapper inView={inView}>
        <Link
          href="https://max-christiansen-dev.netlify.app/dmc_resume.pdf"
          target="_blank"
        >
          <ResumeSvg />
          <LinkText>&nbsp;download resume&nbsp;</LinkText>
          <ResumeSvg />
        </Link>
      </LinkWrapper>
    </Container>
  ),
);

export default Experience;
