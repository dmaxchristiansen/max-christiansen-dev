import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const Container = styled.div`
  min-height: 100vh;
  background-color: gainsboro;
  text-align: center;
  padding: 60px 30px;
  @media (min-width: 768px) {
    padding: 100px 30px;
  }
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

const StyledLink = styled(Link)`
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <StaticImage
        src="../images/four-o-four.png"
        alt="sad"
        placeholder="tracedSVG"
        width={300}
      />
      <Header>404</Header>
      <Message>THIS PAGE IS UNAVAILABLE OR DOES NOT EXIST</Message>
      <StyledLink to="/">BACK TO HOME</StyledLink>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page Not Found" noIndex />;

export default NotFoundPage;
