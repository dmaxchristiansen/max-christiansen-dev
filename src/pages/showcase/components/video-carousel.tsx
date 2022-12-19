import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import VideoCarousel from "src/components/showcase/VideoCarousel/VideoCarousel";
import {
  twoCarouselConfig,
  carouselConfig,
} from "src/components/showcase/VideoCarousel/utils/configs";

const VideoCarouselPage = () => (
  <Layout>
    <ComponentHeader text="Video Carousel" />
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
