import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import BackLink from "src/components/showcase/BackLink/BackLink";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import Marquee from "src/components/showcase/Marquee/Marquee";
import { emojiConfig } from "src/components/showcase/Marquee/utils/configs";

const MarqueePage = () => (
  <Layout>
    <ComponentHeader text="Marquee" />
    <Marquee pt="48px" pb="48px" backwardScroll images={emojiConfig} />
    <Marquee pt="48px" pb="48px" images={emojiConfig} />
    <BackLink />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Marquee"
    description="A smooth scrolling marquee component"
    pathname="/showcase/components/marquee"
  />
);

export default MarqueePage;
