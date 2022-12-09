import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";
import VideoCarousel from "src/components/VideoCarousel/VideoCarousel";
import {
  twoCarouselConfig,
  carouselConfig,
} from "src/components/VideoCarousel/utils/configs";

const VideoCarouselPage = () => (
  <Layout headerText="Video Carousel" hasBackButton>
    <VideoCarousel {...carouselConfig} />
    <VideoCarousel {...twoCarouselConfig} />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Video Carousel"
    description="Two variants of a video carousel component"
    pathname="/showcase/components/video-carousel"
  />
);

export default VideoCarouselPage;
