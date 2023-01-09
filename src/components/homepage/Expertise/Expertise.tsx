import { forwardRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import styled, { css } from "styled-components";
import { WHITE } from "src/styles/colors";
import { InViewProps } from "src/utils/types/inView";
import { colConfig } from "src/components/homepage/Expertise/utils/colConfig";
import { FOUR_FIFTY_MS } from "src/utils/constants/transition-speeds";
import { NINE_HUNDRED_MS } from "src/utils/constants/transition-speeds";
import { Z_TEN, Z_TWENTY } from "src/utils/constants/layer-constants";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import Col from "src/components/homepage/Expertise/Col";
import Subheader from "src/components/homepage/Expertise/Subheader";

const Container = styled.div`
  position: relative;
  height: 800px;
  padding: 50px 30px 0;
  @media (max-width: 991px) {
    margin-top: 30px;
    height: unset;
  }
`;

const FlexRow = styled.div`
  position: relative;
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
  z-index: ${Z_TWENTY};
  @media (max-width: 991px) {
    flex-direction: column;
    padding-bottom: 30px;
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

const ImageContainer = styled.div<InViewProps>`
  display: flex;
  justify-content: center;
  position: relative;
  top: -400px;
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to bottom,
    #fff 0%,
    #fff 40%,
    transparent 100%
  );
  mask-image: linear-gradient(to bottom, #fff 0%, #fff 40%, transparent 100%);
  opacity: ${({ inView }) => (inView ? "0.17" : "0")};
  z-index: ${Z_TEN};
  transition: opacity ${NINE_HUNDRED_MS};
  transition-delay: ${FOUR_FIFTY_MS};
  @media (max-width: 991px) {
    display: none;
  }
`;

const Expertise = forwardRef<HTMLDivElement, InViewProps>(({ inView }, ref) => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "code-snapshot.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED, width: 700)
        }
      }
    }
  `);

  return (
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
      <ImageContainer inView={inView}>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
      </ImageContainer>
    </Container>
  );
});

export default Expertise;
