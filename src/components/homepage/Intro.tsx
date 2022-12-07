import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import downArrow from "src/images/down-arrow.gif";
import { scrollToTargetElement } from "src/utils/helpers";

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
    height: calc(100vh - 95px);
    margin-top: 30px;
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

const MobileImageContainer = styled.div`
  display: flex;
  max-width: 150px;
  margin: 0 auto;
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

const ImageContainer = styled.div`
  display: flex;
  max-width: 350px;
  margin: 0 auto;
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

const Intro = () => (
  <Container>
    <Wrapper>
      <Header>Max Christiansen</Header>
      <Subheader>Software Engineer</Subheader>
      <MobileImageContainer>
        <StaticImage
          style={{ borderRadius: "16px" }}
          src="../../images/dmc-brick-profile.jpg"
          alt="Max Christiansen"
        />
      </MobileImageContainer>
      <Copy>
        devoted to creating beautifully simple, accessible web experiences
      </Copy>
      <ImageContainer>
        <StaticImage
          style={{ borderRadius: "16px" }}
          src="../../images/dmc-brick-profile.jpg"
          alt="Max Christiansen"
        />
      </ImageContainer>
      <ScrollDownButtonWrapper>
        <ScrollDownButton
          type="button"
          aria-label="scroll down"
          onClick={() => scrollToTargetElement("expertise", 70)}
        >
          <DownArrow src={downArrow} alt="scroll down arrow" />
        </ScrollDownButton>
      </ScrollDownButtonWrapper>
    </Wrapper>
  </Container>
);

export default Intro;
