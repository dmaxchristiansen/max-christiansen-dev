import { useEffect } from "react";
import { useInView, defaultFallbackInView } from "react-intersection-observer";
import queryString from "query-string";
import { scrollToTargetElement } from "src/utils/helpers";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import Intro from "src/components/homepage/Intro/Intro";
import Expertise from "src/components/homepage/Expertise/Expertise";
import Experience from "src/components/homepage/Experience/Experience";
import SpinningOtter from "src/components/global/SpinningOtter/SpinningOtter";

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
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  const { ref: experienceRef, inView: isExperienceVisible } = useInView({
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  return (
    <Layout isHomeNav>
      <Intro />
      <Expertise ref={expertiseRef} inView={isExpertiseVisible} />
      <Experience ref={experienceRef} inView={isExperienceVisible} />
      <SpinningOtter margin="75px 0" />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
