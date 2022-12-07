import { useEffect } from "react";
import queryString from "query-string";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import Intro from "src/components/homepage/Intro";
import Expertise from "src/components/homepage/Expertise/Expertise";
import Work from "src/components/homepage/Work";

interface IndexPageProps {
  location: {
    search: string;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  const activeParam = queryString.parse(location.search).active?.toString();

  useEffect(() => {
    if (!activeParam) return;
    scrollToTargetElement(activeParam, 70);
  });

  return (
    <Layout isHomeNav>
      <Intro />
      <Expertise />
      <Work />
    </Layout>
  );
};
export const Head = () => <Seo />;

export default IndexPage;
