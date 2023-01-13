import { useInView, defaultFallbackInView } from "react-intersection-observer";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import Intro from "src/components/homepage/Intro/Intro";
import Expertise from "src/components/homepage/Expertise/Expertise";
import Experience from "src/components/homepage/Experience/Experience";
import Stack from "src/components/homepage/Stack/Stack";
import ScrollTopLink from "src/components/homepage/ScrollTopLink/ScrollTopLink";

const IndexPage: React.FC = () => {
  defaultFallbackInView(true);

  const { ref: expertiseRef, inView: isExpertiseVisible } = useInView({
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  const { ref: experienceRef, inView: isExperienceVisible } = useInView({
    threshold: 1,
    delay: 250,
    triggerOnce: true,
  });

  const { ref: stackRef, inView: isStackVisible } = useInView({
    threshold: 1,
    delay: 250,
    triggerOnce: true,
  });

  return (
    <Layout>
      <Intro />
      <Expertise ref={expertiseRef} inView={isExpertiseVisible} />
      <Experience ref={experienceRef} inView={isExperienceVisible} />
      <Stack ref={stackRef} inView={isStackVisible} />
      <ScrollTopLink />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
