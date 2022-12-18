import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import DataVisualizer from "src/components/showcase/DataVisualizer/DataVisualizer";

const DataVisualizerPage = () => (
  <Layout>
    <DataVisualizer />
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
