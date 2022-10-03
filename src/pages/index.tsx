import styled from "styled-components";
import {
  singleConfig,
  twoCarouselConfig,
  carouselConfig,
} from "src/components/VideoCarousel/utils/configs";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import VideoCarousel from "src/components/VideoCarousel/VideoCarousel";

const MainHeader = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const IndexPage = () => (
  <Layout>
    <MainHeader>Frontend Showcase</MainHeader>
    <VideoCarousel {...singleConfig} />
    <VideoCarousel {...twoCarouselConfig} />
    <VideoCarousel {...carouselConfig} />
  </Layout>
);

export const Head = () => <Seo />;

export default IndexPage;
