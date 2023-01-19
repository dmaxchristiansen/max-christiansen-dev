import { useContext, useEffect } from "react";
import { useInView, defaultFallbackInView } from "react-intersection-observer";
import styled from "styled-components";
import {
  ComponentViewContext,
  CONTACT_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
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

  const componentViewContext = useContext(ComponentViewContext);

  /*
   * Reset window scroll position on page component mount
   * Resolves Gatsby v5 scroll preservation issue when navigating
   * here from anchor linked sections on main landing page
   *
   * See more in gatsby-browser.js
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      componentViewContext.setHasContactBeenViewed(true);
    }, CONTACT_TIMEOUT);
  });

  return (
    <Layout>
      <Container ref={contactRef}>
        <SectionHeader
          text="Reach out and say hello!"
          inView={isPageVisible || componentViewContext.hasContactBeenViewed}
          textAlign="left"
          transitionDelay="250ms"
        />
        <FormRow
          inView={isPageVisible || componentViewContext.hasContactBeenViewed}
        />
        <SectionHeader
          text="See more from me..."
          inView={isPageVisible || componentViewContext.hasContactBeenViewed}
          textAlign="left"
          transitionDelay="1000ms"
        />
        <SocialMedia
          inView={isPageVisible || componentViewContext.hasContactBeenViewed}
        />
      </Container>
    </Layout>
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
