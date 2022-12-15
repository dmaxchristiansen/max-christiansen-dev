import React, { useState } from "react";
import { useInView, defaultFallbackInView } from "react-intersection-observer";
import styled from "styled-components";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";
import SectionHeader from "src/components/global/SectionHeader/SectionHeader";
import { BLACK, OBSIDIAN, ROYAL_BLUE, BLUE_EYES } from "src/styles/colors";
import { ACCORDION_BOX_SHADOW } from "src/components/homepage/Experience/Accordion/utils/constants";
import { FAST } from "src/utils/constants/transition-speeds";

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
  border: none;
  border-radius: 6px;
  box-shadow: ${ACCORDION_BOX_SHADOW};
  outline: none;
  color: ${BLACK};
  font-size: 18px;
  transition: box-shadow ${FAST};
  &:focus {
    box-shadow: 0 0 8px 6px ${BLUE_EYES};
  }
`;

const TextAreaWrapper = styled.div`
  padding: 0px 30px 30px;
`;

const TextArea = styled.textarea`
  display: block;
  height: auto;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 6px;
  box-shadow: ${ACCORDION_BOX_SHADOW};
  outline: none;
  color: ${BLACK};
  font-size: 18px;
  resize: vertical;
  transition: box-shadow ${FAST};
  &:focus {
    box-shadow: 0 0 8px 6px ${BLUE_EYES};
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${ROYAL_BLUE};
  border: none;
  border-radius: 6px;
  box-shadow: ${ACCORDION_BOX_SHADOW};
  outline: none;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 4px;
  cursor: pointer;
  transition: box-shadow ${FAST}, background-color ${FAST};
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: 0 0 8px 6px ${BLUE_EYES};
  }
  &:focus {
    background-color: ${OBSIDIAN};
    box-shadow: 0 0 8px 6px ${BLUE_EYES};
  }
`;

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactPage = () => {
  const [formState, setFormState] = useState({});
  const [isThankYouContentVisible, setIsThankYouContentVisible] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formState,
      }),
    })
      .then(() => {
        const submitButton = document.getElementById("submitButton");
        if (submitButton) {
          submitButton.setAttribute("disabled", "true");
        }
      })
      .then(() => setIsThankYouContentVisible(true))
      .catch(error => alert(error));
  };

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
        {isThankYouContentVisible && (
          <div style={{ fontSize: 100 }}>Oh hell yes yeah</div>
        )}
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="true"
          onSubmit={e => void handleSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <FormRow>
            <InputWrapper>
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                name="userName"
                required
                onChange={e => handleChange(e)}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                name="userEmail"
                required
                onChange={e => handleChange(e)}
              />
            </InputWrapper>
          </FormRow>
          <TextAreaWrapper>
            <InputLabel>Message</InputLabel>
            <TextArea
              name="userMessage"
              rows={4}
              onChange={e => handleChange(e)}
            />
          </TextAreaWrapper>
          <Button id="submitButton" type="submit">
            SUBMIT
          </Button>
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
