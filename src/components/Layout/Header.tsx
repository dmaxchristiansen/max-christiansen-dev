import styled from "styled-components";

interface HeaderProps {
  text: string;
}

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  color: #165ff3;
  font-family: "Mr Dafoe";
  font-size: 120px;
  text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
`;

const Header: React.FC<HeaderProps> = ({ text }) => <H1>{text}</H1>;

export default Header;
