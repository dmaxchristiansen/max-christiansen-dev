import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 6px;
  color: #f8f9fa;
`;

const Text = styled.p`
  margin: 6px 6px 0;
  line-height: 1;
  font-family: "Exo";
  font-size: 20px;
  @media (min-width: 768px) {
    margin: 6px 18px 0;
  }
`;

const Footer: React.FC = () => (
  <Container>
    <Text>Max Christiansen&nbsp;-&nbsp;{new Date().getFullYear()}</Text>
  </Container>
);

export default Footer;
