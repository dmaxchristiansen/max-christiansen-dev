import {
  singleConfig,
  twoCarouselConfig,
  carouselConfig,
} from "src/components/VideoCarousel/utils/configs";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo/Seo";
import VideoCarousel from "src/components/VideoCarousel/VideoCarousel";

const VideoCarouselPage = () => (
  <Layout headerText="Video Carousel">
    <VideoCarousel {...singleConfig} />
    <VideoCarousel {...twoCarouselConfig} />
    <VideoCarousel {...carouselConfig} />
  </Layout>
);

export const Head = () => <Seo noIndex />;

export default VideoCarouselPage;
