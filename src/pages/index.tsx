import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const MainHeader = styled.h1`
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="FrontendShowcase" pathname="/" />
    <MainHeader>Frontend Showcase</MainHeader>
  </Layout>
);

export default IndexPage;
