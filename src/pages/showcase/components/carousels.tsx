import styled from "styled-components";
import {
  sliderConfig,
  carouselConfig,
} from "src/components/showcase/Carousels/utils/configs";
import { BLUE_SKY } from "src/utils/constants/colors";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import Slider from "src/components/showcase/Carousels/Slider/Slider";
import VideoCarousel from "src/components/showcase/Carousels/VideoCarousel";
import BackLink from "src/components/showcase/BackLink/BackLink";

const Header = styled.h2`
  margin: 0 0 10px;
  text-align: center;
  line-height: 1;
  font-family: Roboto Mono;
  font-size: 46px;
  text-shadow: 0 0 16px ${BLUE_SKY}, 0 0 18px ${BLUE_SKY};
  @media (max-width: 520px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  margin: 0 0 24px;
  padding: ${STANDARD_X_PADDING};
  text-align: center;
  font-size: 20px;
  @media (max-width: 520px) {
    font-size: 16px;
  }
`;

const CarouselsPage = () => (
  <Layout>
    <ComponentHeader text="Carousels" />
    <Header>&lt;VideoSlider/&gt;</Header>
    <Description>
      A simple sliding video carousel featuring some videos I have made
    </Description>

    <Slider slideConfig={sliderConfig} />
    <Header>&lt;PreviewCarousel/&gt;</Header>
    <Description>
      A more complex, infinitely looped video carousel that pairs a featured
      slide/video with a quote and credentials
    </Description>

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
