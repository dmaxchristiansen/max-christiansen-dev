import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import VideoCarousel from "src/components/showcase/VideoCarousel/VideoCarousel";
import BackLink from "src/components/showcase/BackLink/BackLink";
import {
  sliderConfig,
  carouselConfig,
} from "src/components/showcase/VideoCarousel/utils/configs";
import TwoCarousel from "src/components/showcase/VideoCarousel/Slider/Slider";

const VideoCarouselPage = () => (
  <Layout>
    <ComponentHeader text="Video Carousel" />
    <TwoCarousel slideConfig={sliderConfig} />
    <VideoCarousel {...carouselConfig} />
    <BackLink />
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
