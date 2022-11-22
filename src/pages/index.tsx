import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  // height: 100vh;

  overflow: hidden;
`;

const IndexPage = () => (
  <Layout>
    <Container>Hello</Container>
  </Layout>
);

export const Head = () => <Seo />;

export default IndexPage;
