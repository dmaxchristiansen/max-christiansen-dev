import { useEffect, useState } from "react";
import styled from "styled-components";
import WindowResizeContextProvider from "src/utils/providers/WindowResizeContextProvider";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import SocialMedia from "src/components/contact/SocialMedia/SocialMedia";
import FormRow from "src/components/contact/ContactForm/FormRow";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const ContactPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
  }, [setIsMounted]);

  return (
    <WindowResizeContextProvider>
      <Layout>
        <Container>
          <SectionHeader
            text="Reach out and say hello!"
            inView={isMounted}
            textAlign="left"
            transitionDelay="250ms"
          />
          <FormRow inView={isMounted} />
          <SectionHeader
            text="See more of my work..."
            inView={isMounted}
            textAlign="left"
            transitionDelay="750ms"
          />
          <SocialMedia inView={isMounted} />
        </Container>
      </Layout>
    </WindowResizeContextProvider>
  );
};

export const Head = () => (
  <Seo
    title="Contact"
    description="Reach-out and get more information!"
    pathname="/contact"
  />
);

export default ContactPage;
