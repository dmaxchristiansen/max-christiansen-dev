import { useInView, defaultFallbackInView } from "react-intersection-observer";
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
  defaultFallbackInView(true);

  const { ref: contactRef, inView: isPageVisible } = useInView({
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  return (
    <WindowResizeContextProvider>
      <Layout>
        <Container ref={contactRef}>
          <SectionHeader
            text="Reach out and say hello!"
            inView={isPageVisible}
            textAlign="left"
            transitionDelay="250ms"
          />
          <FormRow inView={isPageVisible} />
          <SectionHeader
            text="See more of my work..."
            inView={isPageVisible}
            textAlign="left"
            transitionDelay="750ms"
          />
          <SocialMedia inView={isPageVisible} />
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
