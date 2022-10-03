import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const MainHeader = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const MarqueePage = () => (
  <Layout headerText="Marquee">
    <MainHeader>Marquee</MainHeader>
  </Layout>
);

export const Head = () => <Seo title="Marquee" />;

export default MarqueePage;
