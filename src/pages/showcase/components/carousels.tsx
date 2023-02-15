import styled from "styled-components";
import {
  sliderConfig,
  previewCarouselConfig,
} from "src/components/showcase/SliderCarousel/utils/configs";
import { BLUE_SKY } from "src/utils/constants/colors";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";
import PreviewCarouselContextProvider from "src/utils/providers/PreviewCarouselContextProvider";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import Slider from "src/components/showcase/SliderCarousel/Slider/Slider";
import PreviewCarousel from "src/components/showcase/SliderCarousel/PreviewCarousel/PreviewCarousel";
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
  max-width: 700px;
  margin: 0 auto 24px;
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
    <Header>&lt;Slider/&gt;</Header>
    <Description>
      A simple sliding video carousel featuring some videos I have made
    </Description>
    <Slider slideConfig={sliderConfig} />
    <Header>&lt;PreviewCarousel/&gt;</Header>
    <Description>
      A more complex, infinitely looped video carousel that renders previous and
      next slide previews - populated with placeholder content
    </Description>
    <PreviewCarouselContextProvider cardConfig={previewCarouselConfig}>
      <PreviewCarousel />
    </PreviewCarouselContextProvider>
    <BackLink />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Carousels"
    description="Animated carousel components"
    pathname="/showcase/components/carousels"
  />
);

export default CarouselsPage;
