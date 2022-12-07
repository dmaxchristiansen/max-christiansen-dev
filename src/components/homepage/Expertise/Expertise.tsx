import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { WHITE } from "src/styles/colors";
import { InViewProps } from "src/components/homepage/types/homepage";
import { colConfig } from "src/components/homepage/Expertise/utils/colConfig";
import SectionHeader from "src/components/homepage/SectionHeader";
import Col from "src/components/homepage/Expertise/Col";
import Subheader from "src/components/homepage/Expertise/Subheader";

const Container = styled.div`
  padding: 0 30px;
`;

const FlexRow = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
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

const Expertise = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => (
  <Container id="expertise" ref={ref}>
    <SectionHeader text="My Expertise" inView={inView} />
    <FlexRow>
      {colConfig.map(col => (
        <Col key={col.topLineText} index={col.index} inView={inView}>
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
  </Container>
));

export default Expertise;
