import styled from "styled-components";

const H2 = styled.h2`
  margin: 0 0 20px;
  text-align: center;
  font-size: 45px;
  @media (max-width: 991px) {
    font-size: 36px;
  }
  @media (max-width: 520px) {
    margin-bottom: 12px;
    text-align: left;
    font-size: 24px;
  }
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <H2>{children}</H2>
);

export default Title;
