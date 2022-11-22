import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import VideoCarousel from "src/components/VideoCarousel/VideoCarousel";
import {
  singleConfig,
  twoCarouselConfig,
  carouselConfig,
} from "src/components/VideoCarousel/utils/configs";

const VideoCarouselPage = () => (
  <Layout headerText="Video Carousel" hasBackButton>
    <VideoCarousel {...singleConfig} />
    <VideoCarousel {...twoCarouselConfig} />
    <VideoCarousel {...carouselConfig} />
  </Layout>
);

export const Head = () => <Seo noIndex />;

export default VideoCarouselPage;
