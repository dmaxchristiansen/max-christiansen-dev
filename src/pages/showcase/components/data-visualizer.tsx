import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import DataVisualizer from "src/components/showcase/DataVisualizer/DataVisualizer";
import FixedLink from "src/components/global/FixedLink/FixedLink";
import { ungulateDataConfig } from "src/components/showcase/DataVisualizer/utils/dataConfigs";

const DataVisualizerPage = () => (
  <Layout>
    <ComponentHeader text="Data Visualizer" />
    <DataVisualizer data={ungulateDataConfig} margin="60px 0 80px" />
    <FixedLink
      isTopAligned
      scrollReactionThreshold={0}
      href="/showcase/components/"
      text="⬅ components"
      desktopFontSize="18px"
      mobileFontSize="18px"
      padding="10px"
    />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Data Visualizer"
    description="An animated bar graph to represent different data sets"
    pathname="/showcase/components/data-visualizer"
  />
);

export default DataVisualizerPage;
