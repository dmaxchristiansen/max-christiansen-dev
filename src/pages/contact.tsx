import { useInView, defaultFallbackInView } from "react-intersection-observer";
import styled from "styled-components";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import ContactForm from "src/components/contact/ContactForm/ContactForm";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
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
    <Layout>
      <Container ref={contactRef}>
        <HeaderWrapper>
          <SectionHeader
            text="Reach out and say hello!"
            inView={isPageVisible}
            delayTransition
          />
        </HeaderWrapper>
        <ContactForm inView={isPageVisible} />
      </Container>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Contact"
    description="Reach-out to get more information!"
    pathname="/contact"
  />
);

export default ContactPage;
