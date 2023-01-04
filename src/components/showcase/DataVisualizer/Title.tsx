import styled from "styled-components";

const H2 = styled.h2`
  margin: 0 0 20px;
  text-align: center;
  font-size: 45px;
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <H2>{children}</H2>
);

export default Title;
