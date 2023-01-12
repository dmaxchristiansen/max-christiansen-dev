import { useState, useEffect } from "react";
import { InViewProps } from "src/utils/types/inView";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import downArrow from "src/images/down-arrow.gif";
import { scrollToTargetElement } from "src/utils/helpers";
import { WIDE_BLUE_GLOW } from "src/utils/constants/shadow-constants";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
  ONE_THOUSAND_MS,
  TWO_THOUSAND_MS,
  THREE_THOUSAND_MS,
  FOUR_THOUSAND_MS,
  THIRTY_FIVE_HUNDRED_MS,
} from "src/utils/constants/transition-speeds";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 105px);
  margin-top: 40px;
  text-align: center;
  letter-spacing: 4px;
  @media (max-width: 991px) {
    height: unset;
    margin-bottom: 110px;
  }
  @media (max-width: 520px) {
    height: calc(100vh - 75px);
    margin-top: 0;
  }
`;

const Header = styled.h1<InViewProps>`
  margin: 0 0 10px;
  font-size: 80px;
  line-height: 1;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_FIFTY_MS};
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    margin-bottom: 10px;
    font-size: 44px;
  }
`;

const Subheader = styled.h2<InViewProps>`
  margin: 0;
  font-size: 40px;
  line-height: 1;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${ONE_THOUSAND_MS};
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 520px) {
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

const SharedProfileImageContainerStyles = css`
  display: flex;
  margin: 0 auto;
  border-radius: 16px;
`;

const MobileProfileImageContainer = styled.div<InViewProps>`
  max-width: 150px;
  box-shadow: ${WIDE_BLUE_GLOW};
  ${SharedProfileImageContainerStyles}
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_THOUSAND_MS};
  @media (min-width: 521px) {
    display: none;
  }
`;

const Copy = styled.p<InViewProps>`
  margin: 40px 0 60px;
  font-size: 24px;
  letter-spacing: 2px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_THOUSAND_MS};
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    margin: 30px 0 0;
    font-size: 18px;
    transition-duration: ${FIVE_HUNDRED_MS};
    transition-delay: ${THREE_THOUSAND_MS};
  }
`;

const ProfileImageContainer = styled.div<InViewProps>`
  max-width: 350px;
  ${SharedProfileImageContainerStyles}
  box-shadow: ${({ inView }) => (inView ? WIDE_BLUE_GLOW : "none")};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity, box-shadow;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${THREE_THOUSAND_MS}, ${THIRTY_FIVE_HUNDRED_MS};
  @media (max-width: 520px) {
    display: none;
  }
`;

const ScrollDownButtonWrapper = styled.div<InViewProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  width: 100%;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, -100px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${FOUR_THOUSAND_MS};
  @media (max-width: 520px) {
    bottom: 16%;
  }
`;

const ScrollDownButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 521px) and (max-width: 991px) {
    display: none;
  }
`;

const DownArrow = styled.img`
  width: 140px;
`;

const Intro = () => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dmc-brick-profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  return (
    <Container>
      <Wrapper>
        <Header inView={isMounted}>Max Christiansen</Header>
        <Subheader inView={isMounted}>Software Engineer</Subheader>
        <MobileProfileImageContainer inView={isMounted}>
          <GatsbyImage
            style={{ borderRadius: 16 }}
            imgStyle={{ borderRadius: 16 }}
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Max Christiansen"
          />
        </MobileProfileImageContainer>
        <Copy inView={isMounted}>
          devoted to creating beautifully simple, modern web experiences
        </Copy>
        <ProfileImageContainer inView={isMounted}>
          <GatsbyImage
            style={{ borderRadius: 16 }}
            imgStyle={{ borderRadius: 16 }}
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Max Christiansen"
          />
        </ProfileImageContainer>
        <ScrollDownButtonWrapper inView={isMounted}>
          <ScrollDownButton
            type="button"
            aria-label="scroll down"
            onClick={() => scrollToTargetElement("expertise", 10)}
          >
            <DownArrow src={downArrow} alt="scroll down arrow" />
          </ScrollDownButton>
        </ScrollDownButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Intro;
