import { useEffect } from "react";
import { useInView, defaultFallbackInView } from "react-intersection-observer";
import queryString from "query-string";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import Intro from "src/components/homepage/Intro";
import Expertise from "src/components/homepage/Expertise/Expertise";
import Work from "src/components/homepage/Work/Work";
import SpinningOtter from "src/components/SpinningOtter/SpinningOtter";

interface IndexPageProps {
  location: {
    search: string;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  const activeParam = queryString.parse(location.search).active?.toString();

  useEffect(() => {
    if (!activeParam) return;
    scrollToTargetElement(activeParam, 60);
  });

  defaultFallbackInView(true);

  const { ref: expertiseRef, inView: isExpertiseVisible } = useInView({
    threshold: 0.5,
    delay: 100,
    triggerOnce: true,
  });

  const { ref: workRef, inView: isWorkVisible } = useInView({
    threshold: 0.5,
    delay: 100,
    triggerOnce: true,
  });

  return (
    <Layout isHomeNav>
      <Intro />
      <Expertise ref={expertiseRef} inView={isExpertiseVisible} />
      <Work ref={workRef} inView={isWorkVisible} />
      <SpinningOtter margin="75px 0" />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
