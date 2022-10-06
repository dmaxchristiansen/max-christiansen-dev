import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import Marquee from "src/components/Marquee/Marquee";
import { emojiConfig } from "src/components/Marquee/utils/configs";

const MarqueePage = () => (
  <Layout headerText="Marquee">
    <Marquee pt="48px" pb="48px" backwardScroll images={emojiConfig} />
    <Marquee pt="48px" pb="48px" images={emojiConfig} />
  </Layout>
);

export const Head = () => <Seo title="Marquee" />;

export default MarqueePage;
