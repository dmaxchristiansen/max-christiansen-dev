import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import VideoCarousel from "src/components/showcase/VideoCarousel/VideoCarousel";
import {
  twoCarouselConfig,
  carouselConfig,
} from "src/components/showcase/VideoCarousel/utils/configs";

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
