import React, { useState } from "react";
import styled, { css } from "styled-components";
import { DARK_SHADOW, NARROW_BLUE_GLOW } from "src/utils/constants/shadows";
import { BLACK, OBSIDIAN, ROYAL_BLUE } from "src/utils/constants/colors";
import { InViewProps } from "src/utils/types/inView";
import {
  FOUR_FIFTY_MS,
  TWO_THOUSAND_MS,
  TWO_FIFTY_MS,
  FIVE_HUNDRED_MS,
} from "src/utils/constants/transitions";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animations";

interface SubmitProps {
  isSubmitted: boolean;
}

const Container = styled.div`
  width: 100%;
  max-width: 860px;
  @media (max-width: 991px) {
    max-width: unset;
  }
`;

const SuccessContent = styled.div<SubmitProps>`
  display: ${({ isSubmitted }) => (isSubmitted ? "block" : "none")};
  padding-top: 50px;
  animation-name: ${OPACITY_KEYFRAMES};
  animation-duration: ${TWO_THOUSAND_MS};
  font-size: 60px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const SuccessMessage = styled.div`
  padding-top: 20px;
`;

const Form = styled.form<InViewProps & SubmitProps>`
  display: ${({ isSubmitted }) => (isSubmitted ? "none" : "block")};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${FIVE_HUNDRED_MS};
`;

const FlexRow = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const InputWrapper = styled.div`
  width: 50%;
  margin-right: 30px;
  @media (max-width: 991px) {
    margin-right: 0;
    &:first-child {
      margin-right: 30px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 0 15px 0;
  }
`;

const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const SharedInputStyles = css`
  display: block;
  height: auto;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 6px;
  box-shadow: ${DARK_SHADOW};
  outline: none;
  color: ${BLACK};
  font-size: 18px;
  transition: box-shadow ${TWO_FIFTY_MS};
  &:focus {
    box-shadow: ${NARROW_BLUE_GLOW};
  }
  @media (max-width: 767px) {
    padding: 12px;
    font-size: 16px;
  }
`;

const Input = styled.input`
  ${SharedInputStyles}
`;

const TextAreaWrapper = styled.div`
  margin: 0 30px 30px 0;
  @media (max-width: 991px) {
    margin: 0 0 30px 0;
  }
`;

const TextArea = styled.textarea`
  ${SharedInputStyles}
  resize: none;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${ROYAL_BLUE};
  border: none;
  border-radius: 6px;
  box-shadow: ${DARK_SHADOW};
  outline: none;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 4px;
  cursor: pointer;
  transition: box-shadow ${TWO_FIFTY_MS}, background-color ${TWO_FIFTY_MS};
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: ${NARROW_BLUE_GLOW};
  }
  &:focus {
    background-color: ${OBSIDIAN};
    box-shadow: ${NARROW_BLUE_GLOW};
  }
`;

const ContactForm: React.FC<InViewProps> = ({ inView }) => {
  const [formState, setFormState] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

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
      .then(() => setIsSubmitted(true))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <SuccessContent isSubmitted={isSubmitted}>
        🔥 THANK YOU 🔥
        <SuccessMessage>I will be in contact soon!</SuccessMessage>
      </SuccessContent>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="true"
        inView={inView}
        isSubmitted={isSubmitted}
        onSubmit={e => void handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <FlexRow>
          <InputWrapper>
            <InputLabel htmlFor="userName">Name</InputLabel>
            <Input
              type="text"
              id="userName"
              name="userName"
              required
              onChange={e => handleChange(e)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="userEmail">Email</InputLabel>
            <Input
              type="email"
              name="userEmail"
              id="userEmail"
              required
              onChange={e => handleChange(e)}
            />
          </InputWrapper>
        </FlexRow>
        <TextAreaWrapper>
          <InputLabel htmlFor="userMessage">Message</InputLabel>
          <TextArea
            name="userMessage"
            id="userMessage"
            rows={4}
            onChange={e => handleChange(e)}
          />
        </TextAreaWrapper>
        <SubmitButton id="submitButton" type="submit">
          SUBMIT
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactForm;
