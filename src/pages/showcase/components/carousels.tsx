import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import VideoCarousel from "src/components/showcase/Carousels/VideoCarousel";
import BackLink from "src/components/showcase/BackLink/BackLink";
import {
  sliderConfig,
  carouselConfig,
} from "src/components/showcase/Carousels/utils/configs";
import TwoCarousel from "src/components/showcase/Carousels/Slider/Slider";

const CarouselsPage = () => (
  <Layout>
    <ComponentHeader text="Carousels" />
    <TwoCarousel slideConfig={sliderConfig} />
    <VideoCarousel {...carouselConfig} />
    <BackLink />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Video Carousel"
    description="Animated carousel components"
    pathname="/showcase/components/carousels"
  />
);

export default CarouselsPage;
