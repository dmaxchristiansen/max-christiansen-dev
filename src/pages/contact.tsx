import { useInView, defaultFallbackInView } from "react-intersection-observer";
import styled from "styled-components";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import { BLACK, OBSIDIAN, ROYAL_BLUE, WHITE } from "src/styles/colors";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  padding: 0 30px 0;
`;

const Form = styled.form`
  max-width: 800px;
  margin: 60px auto 0;
`;

const FormRow = styled.div`
  display: flex;
  padding: 0 15px 30px;
`;

const InputWrapper = styled.div`
  width: 50%;
  padding: 0px 15px;
`;

const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
`;

const Input = styled.input`
  display: block;
  height: auto;
  width: 100%;
  padding: 16px;
  border: 2px solid ${WHITE};
  border-radius: 6px;
  color: ${BLACK};
  font-size: 18px;
`;

const TextAreaWrapper = styled.div`
  padding: 0px 30px 30px;
`;

const TextArea = styled.textarea`
  display: block;
  height: auto;
  width: 100%;
  padding: 16px;
  border: 2px solid ${WHITE};
  border-radius: 6px;
  color: ${BLACK};
  font-size: 18px;
  resize: vertical;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${OBSIDIAN};
  border: 2px solid ${ROYAL_BLUE};
  border-radius: 6px;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 4px;
`;

const ContactPage = () => {
  defaultFallbackInView(true);

  const { ref: expertiseRef, inView: isExpertiseVisible } = useInView({
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  return (
    <Layout>
      <Container ref={expertiseRef}>
        <HeaderWrapper>
          <SectionHeader
            text="Reach out and say hello!"
            inView={isExpertiseVisible}
            delayTransition
          />
        </HeaderWrapper>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <FormRow>
            <InputWrapper>
              <InputLabel>Name</InputLabel>
              <Input type="text" name="userName" required />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Email</InputLabel>
              <Input type="text" name="userEmail" required />
            </InputWrapper>
          </FormRow>
          <TextAreaWrapper>
            <InputLabel>Message</InputLabel>
            <TextArea name="userMessage" rows={4} />
          </TextAreaWrapper>
          <Button type="submit">SUBMIT</Button>
        </Form>
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
