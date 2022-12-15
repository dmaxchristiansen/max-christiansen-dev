import { useInView, defaultFallbackInView } from "react-intersection-observer";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import Intro from "src/components/homepage/Intro/Intro";
import Expertise from "src/components/homepage/Expertise/Expertise";
import Experience from "src/components/homepage/Experience/Experience";
import SpinningOtter from "src/components/global/SpinningOtter/SpinningOtter";

const IndexPage: React.FC = () => {
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
    <Layout>
      <Intro />
      <Expertise ref={expertiseRef} inView={isExpertiseVisible} />
      <Experience ref={experienceRef} inView={isExperienceVisible} />
      <SpinningOtter margin="75px 0" />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
