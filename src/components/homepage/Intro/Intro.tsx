import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import downArrow from "src/images/down-arrow.gif";
import { scrollToTargetElement } from "src/utils/helpers";
import { BLUE_EYES } from "src/styles/colors";

const PROFILE_IMAGE_BOX_SHADOW = ` 0 0 24px 6px ${BLUE_EYES}`;

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
    margin-bottom: 60px;
  }
  @media (max-width: 520px) {
    height: calc(100vh - 75px);
    margin-top: 0;
  }
`;

const Header = styled.h1`
  margin: 0 0 10px;
  font-size: 80px;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    margin-bottom: 10px;
    font-size: 44px;
  }
`;

const Subheader = styled.h2`
  margin: 0;
  font-size: 40px;
  line-height: 1;
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
  box-shadow: ${PROFILE_IMAGE_BOX_SHADOW};
  border-radius: 16px;
`;

const MobileProfileImageContainer = styled.div`
  max-width: 150px;
  ${SharedProfileImageContainerStyles}
  @media (min-width: 521px) {
    display: none;
  }
`;

const Copy = styled.p`
  margin: 40px 0 60px;
  font-size: 24px;
  letter-spacing: 2px;
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    margin: 30px 0 0;
    font-size: 18px;
  }
`;

const ProfileImageContainer = styled.div`
  max-width: 350px;
  ${SharedProfileImageContainerStyles}
  @media (max-width: 520px) {
    display: none;
  }
`;

const ScrollDownButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  width: 100%;
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

  return (
    <Container>
      <Wrapper>
        <Header>Max Christiansen</Header>
        <Subheader>Software Engineer</Subheader>
        <MobileProfileImageContainer>
          <GatsbyImage
            style={{ borderRadius: 16 }}
            imgStyle={{ borderRadius: 16 }}
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Max Christiansen"
          />
        </MobileProfileImageContainer>
        <Copy>
          devoted to creating beautifully simple, modern web experiences
        </Copy>
        <ProfileImageContainer>
          <GatsbyImage
            style={{ borderRadius: 16 }}
            imgStyle={{ borderRadius: 16 }}
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Max Christiansen"
          />
        </ProfileImageContainer>
        <ScrollDownButtonWrapper>
          <ScrollDownButton
            type="button"
            aria-label="scroll down"
            onClick={() => scrollToTargetElement("expertise", 60)}
          >
            <DownArrow src={downArrow} alt="scroll down arrow" />
          </ScrollDownButton>
        </ScrollDownButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Intro;
