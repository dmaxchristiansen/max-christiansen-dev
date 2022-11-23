import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import downArrow from "src/images/down-arrow.gif";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const HeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 40px;
  text-align: center;
  letter-spacing: 4px;
  @media (max-width: 520px) {
    margin-top: 20px;
  }
`;

const Header = styled.h1`
  margin: 0;
  font-size: 80px;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
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
    font-size: 24px;
  }
`;

const HeaderCopy = styled.p`
  margin: 40px 0 60px;
  font-size: 24px;
  letter-spacing: 2px;
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

const Placeholder = styled.div`
  height: 800px;
  width: 100%;
  margin-bottom: 50px;
  outline: 1px solid red;
`;

const ScrollDownButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 120px;
`;

const ScrollDownButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const DownArrow = styled.img`
  width: 140px;
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <HeaderContainer>
        <Header>Max Christiansen</Header>
        <Subheader>Software Engineer</Subheader>
        <HeaderCopy>
          devoted to creating beautifully simple, accessible web experiences
        </HeaderCopy>
        <StaticImage
          style={{ borderRadius: "16px" }}
          width={300}
          src="../images/dmc-raft-profile.jpg"
          alt="Max Christiansen"
        />
        <ScrollDownButtonWrapper>
          <ScrollDownButton
            type="button"
            aria-label="scroll down"
            onClick={() => scrollToTargetElement("expertise", 70)}
          >
            <DownArrow src={downArrow} alt="scroll down arrow" />
          </ScrollDownButton>
        </ScrollDownButtonWrapper>
      </HeaderContainer>
      <Placeholder id="expertise">expertise</Placeholder>
      <Placeholder id="work">work</Placeholder>
    </Container>
  </Layout>
);

export const Head = () => <Seo />;

export default IndexPage;
