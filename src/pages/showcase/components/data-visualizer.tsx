import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import ComponentHeader from "src/components/showcase/ComponentHeader/ComponentHeader";
import DataVisualizer from "src/components/showcase/DataVisualizer/DataVisualizer";
import { ungulateDataConfig } from "src/components/showcase/DataVisualizer/utils/dataConfigs";

const DataVisualizerPage = () => (
  <Layout>
    <ComponentHeader text="Data Visualizer" />
    <DataVisualizer data={ungulateDataConfig} margin="60px 0 80px" />
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
