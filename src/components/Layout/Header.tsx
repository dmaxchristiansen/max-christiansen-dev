import styled from "styled-components";

interface HeaderProps {
  text: string;
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: 180px;
  background-color: #000000;
`;

const Span = styled.span<HeaderProps>`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  color: #cf1b1b;
  font-size: 100px;
  letter-spacing: 8px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  &:before {
    content: ${({ text }) => `"${text}"`};
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    transition: 1s;
  }
  &:after {
    content: ${({ text }) => `"${text}"`};
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;

    transition: 1s;
  }
  &:hover:before {
    top: 10px;
    left: 10px;
  }
  &:hover:after {
    top: -10px;
    left: -10px;
  }
`;

const Header: React.FC<HeaderProps> = ({ text }) => (
  <Container>
    <Span text={text}>{text}</Span>
  </Container>
);

export default Header;
