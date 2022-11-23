import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import downArrow from "src/images/down-arrow.gif";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const ProfileCopyContainer = styled.div`
  width: 70%;
  margin-left: 40px;
`;

const ProfileHeader = styled.h1`
  margin: 0;
  font-size: 80px;
  line-height: 1;
`;

const ProfileSubheader = styled.h2`
  margin: 0;
  font-size: 40px;
  line-height: 1;
`;

const ProfileCopy = styled.p`
  font-size: 20px;
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
      <ProfileContainer>
        <StaticImage
          style={{ borderRadius: "50%" }}
          src="../images/dmc-raft-profile.jpg"
          alt="Max Christiansen"
        />
        <ProfileCopyContainer>
          <ProfileHeader>Max Christiansen</ProfileHeader>
          <ProfileSubheader>Software Engineer</ProfileSubheader>
          <ProfileCopy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ProfileCopy>
        </ProfileCopyContainer>
      </ProfileContainer>
      <ScrollDownButtonWrapper>
        <ScrollDownButton
          type="button"
          aria-label="scroll down"
          onClick={() => scrollToTargetElement("expertise", 70)}
        >
          <DownArrow src={downArrow} alt="scroll down arrow" />
        </ScrollDownButton>
      </ScrollDownButtonWrapper>
      <Placeholder id="expertise">expertise</Placeholder>
      <Placeholder id="work">work</Placeholder>
    </Container>
  </Layout>
);

export const Head = () => <Seo />;

export default IndexPage;
