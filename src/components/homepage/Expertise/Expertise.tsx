import { forwardRef, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { WHITE } from "src/utils/constants/colors";
import { InViewProps } from "src/utils/types/inView";
import { colConfig } from "src/components/homepage/Expertise/utils/colConfig";
import {
  FIFTEEN_HUNDRED_MS,
  TWO_THOUSAND_MS,
} from "src/utils/constants/transitions";
import { Z_TWENTY } from "src/utils/constants/layers";
import {
  ComponentViewContext,
  EXPERTISE_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import Col from "src/components/homepage/Expertise/Col/Col";
import Subheader from "src/components/homepage/Expertise/Subheader/Subheader";
import ChevronScrollButton from "src/components/homepage/ChevronScrollButton/ChevronScrollButton";
import CtaLink from "src/components/homepage/CtaLink/CtaLink";
import BackgroundImage from "src/components/homepage/Expertise/BackgroundImage/BackgroundImage";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 50px 30px 0;
  @media (max-width: 520px) {
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

const FlexRow = styled.div`
  position: relative;
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 40px;
  z-index: ${Z_TWENTY};
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const SubheaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SvgWrapper = styled.div`
  min-width: 42px;
`;

const ContentWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 16px;
    height: 65%;
    width: 0;
    opacity: 0.3;
    border: 1px solid ${WHITE};
    bottom: 18%;
  }
`;

const SharedPseudoStyles = css`
  display: block;
  margin-left: -35px;
  opacity: 0.3;
  font-size: 14px;
`;

const Content = styled.h3`
  margin: 0;
  padding-left: 35px;
  font-family: Roboto Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  &:before {
    content: "<h3>";
    margin-bottom: 5px;
    ${SharedPseudoStyles}
  }
  &:after {
    content: "</h3>";
    margin-top: 5px;
    ${SharedPseudoStyles}
  }
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    font-size: 16px;
  }
`;

const Expertise = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => {
  const componentViewContext = useContext(ComponentViewContext);
  const { setHasExpertiseBeenViewed, hasExpertiseBeenViewed } =
    componentViewContext;

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHasExpertiseBeenViewed(true);
      }, EXPERTISE_TIMEOUT);
    }
  });

  return (
    <Container id="expertise" ref={ref}>
      <Wrapper>
        <BackgroundImage inView={inView || hasExpertiseBeenViewed} />
        <SectionHeader
          text="My Expertise"
          inView={inView || hasExpertiseBeenViewed}
        />
        <FlexRow>
          {colConfig.map(col => (
            <Col
              key={col.topLineText}
              index={col.index}
              inView={inView || hasExpertiseBeenViewed}
            >
              <SubheaderWrapper>
                <SvgWrapper>
                  <col.SvgComponent />
                </SvgWrapper>
                <Subheader
                  topLineText={col.topLineText}
                  bottomLineText={col.bottomLineText}
                  backgroundColor={col.backgroundColor}
                />
              </SubheaderWrapper>
              <ContentWrapper>
                <Content>{col.contentText}</Content>
              </ContentWrapper>
            </Col>
          ))}
        </FlexRow>
        <CtaLink
          text="go to showcase"
          destination="/showcase"
          transitionDelay={FIFTEEN_HUNDRED_MS}
          inView={inView || hasExpertiseBeenViewed}
        />
        <ChevronScrollButton
          targetElementId="experience"
          targetElementOffsetTopValue={0}
          transitionDelay={TWO_THOUSAND_MS}
          hideOnMobile
          inView={inView || hasExpertiseBeenViewed}
        />
      </Wrapper>
    </Container>
  );
});

export default Expertise;
