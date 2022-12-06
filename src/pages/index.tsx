import { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import Intro from "src/components/homepage/Intro";

interface IndexPageProps {
  location: {
    search: string;
  };
}

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const Placeholder = styled.div`
  height: 800px;
  width: 100%;
  margin-bottom: 50px;
  outline: 1px solid red;
`;

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  const activeParam = queryString.parse(location.search).active?.toString();

  useEffect(() => {
    if (!activeParam) return;
    scrollToTargetElement(activeParam, 70);
  });

  return (
    <Layout isHomeNav>
      <Container>
        <Intro />
        <Placeholder id="expertise">expertise</Placeholder>
        <Placeholder id="work">work</Placeholder>
      </Container>
    </Layout>
  );
};
export const Head = () => <Seo />;

export default IndexPage;
