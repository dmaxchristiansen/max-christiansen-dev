import styled from "styled-components";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const ContactPage = () => (
  <Layout>
    <Container>Placeholder</Container>
  </Layout>
);

export const Head = () => (
  <Seo
    title="contact"
    description="Reach-out to get more information"
    pathname="/contact"
  />
);

export default ContactPage;
