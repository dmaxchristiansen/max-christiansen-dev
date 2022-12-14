import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { SNAIL } from "src/utils/constants/transition-speeds";
import { SPIN_KEYFRAMES } from "src/utils/constants/animation-constants";
import Layout from "../components/global/Layout/Layout";
import Seo from "../components/global/Seo/Seo";
import ButtonLink from "src/components/global/ButtonLink/ButtonLink";

const Container = styled.div`
  min-height: 100vh;
  padding: 60px 30px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 100px 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  animation: ${SPIN_KEYFRAMES} ${SNAIL} linear infinite;
`;

const Header = styled.h1`
  line-height: 1;
  margin: 24px 0 24px;
  font-size: 75px;
  @media (min-width: 768px) {
    margin: 32px 0 32px;
    font-size: 100px;
  }
`;

const Message = styled.p`
  line-height: 1;
  margin: 0 0 40px;
  font-size: 24px;
  @media (min-width: 768px) {
    margin: 0 0 48px;
    font-size: 32px;
  }
`;

const NotFoundPage = () => (
  <Layout hideNav hideFooter>
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <StaticImage
            src="../images/four-o-four.png"
            alt="sad face"
            placeholder="tracedSVG"
            width={300}
          />
        </ImageWrapper>
      </ImageContainer>
      <Header>404</Header>
      <Message>THIS PAGE IS UNAVAILABLE OR DOES NOT EXIST</Message>
      <ButtonLink
        href="/"
        text="BACK TO HOME"
        fontSize="32px"
        py="6px"
        px="12px"
      />
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page Not Found" noIndex />;

export default NotFoundPage;
