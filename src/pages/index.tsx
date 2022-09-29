import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" pathname="/" />
    <h1>Frontend Showcase</h1>
  </Layout>
);

export default IndexPage;
