import styled from "styled-components";

const H2 = styled.h2`
  margin: 0 0 10px;
  text-align: center;
  font-size: 28px;
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <H2>{children}</H2>
);

export default Title;
