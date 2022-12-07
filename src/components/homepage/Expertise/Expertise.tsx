import styled from "styled-components";
import { HOT_PINK, BLUE_SKY, PURPLE_HAZE } from "src/styles/colors";
import SectionHeader from "src/components/homepage/SectionHeader";
import ComputerSvg from "src/components/homepage/Expertise/svgs/ComputerSvg";
import ReactSvg from "src/components/homepage/Expertise/svgs/ReactSvg";
import BrainSvg from "src/components/homepage/Expertise/svgs/BrainSvg";
import Subheader from "src/components/homepage/Expertise/Subheader";

const FlexRow = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  border: 4px solid #a3a3a3;
  border-radius: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 40px 30px;
  border-style: solid;
  border-color: #a3a3a3;
  border-width: 0 2px 0 0;
  &:last-child {
    border-width: 0;
  }
`;

const SubheaderContainer = styled.div`
  display: flex;
`;

const SvgWrapper = styled.div`
  min-width: 42px;
`;

const ContentContainer = styled.div``;

const Expertise = () => (
  <div id="expertise">
    <SectionHeader text="My Expertise" />
    <FlexRow>
      <Col>
        <SubheaderContainer>
          <SvgWrapper>
            <ComputerSvg />
          </SvgWrapper>
          <Subheader
            topLineText="Software"
            bottomLineText="Development"
            backgroundColor={HOT_PINK}
          />
        </SubheaderContainer>
        <ContentContainer></ContentContainer>
      </Col>
      <Col>
        <SubheaderContainer>
          <SvgWrapper>
            <ReactSvg />
          </SvgWrapper>
          <Subheader
            topLineText="Frontend Dev"
            bottomLineText="React, GatsbyJS"
            backgroundColor={BLUE_SKY}
          />
        </SubheaderContainer>
        <ContentContainer></ContentContainer>
      </Col>
      <Col>
        <SubheaderContainer>
          <SvgWrapper>
            <BrainSvg />
          </SvgWrapper>
          <Subheader
            topLineText="Interpersonal"
            bottomLineText="Communication"
            backgroundColor={PURPLE_HAZE}
          />
        </SubheaderContainer>
        <ContentContainer></ContentContainer>
      </Col>
    </FlexRow>
  </div>
);

export default Expertise;
