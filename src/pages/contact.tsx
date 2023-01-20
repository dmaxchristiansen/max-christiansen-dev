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
import FormRow from "src/components/contact/FormRow/FormRow";
import { ONE_THOUSAND_MS, TWO_FIFTY_MS } from "src/utils/constants/transitions";

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
  const { setHasContactBeenViewed, hasContactBeenViewed } =
    componentViewContext;

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
      setHasContactBeenViewed(true);
    }, CONTACT_TIMEOUT);
  });

  return (
    <Layout>
      <Container ref={contactRef}>
        <SectionHeader
          text="Reach out and say hello!"
          inView={isPageVisible || hasContactBeenViewed}
          textAlign="left"
          transitionDelay={TWO_FIFTY_MS}
        />
        <FormRow inView={isPageVisible || hasContactBeenViewed} />
        <SectionHeader
          text="See more from me..."
          inView={isPageVisible || hasContactBeenViewed}
          textAlign="left"
          transitionDelay={ONE_THOUSAND_MS}
        />
        <SocialMedia inView={isPageVisible || hasContactBeenViewed} />
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
