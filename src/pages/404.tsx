import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const Container = styled.div`
  padding: 220px 30px 180px;
  background-color: gainsboro;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 100px;
  line-height: 1;
`;

const Message = styled.p`
  font-size: 32px;
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" pathname="/404" />
    <Container>
      <Header>404</Header>
      <Message>THIS PAGE IS UNAVAILABLE OR DOES NOT EXIST</Message>
      <Link to="/">BACK TO HOME</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
