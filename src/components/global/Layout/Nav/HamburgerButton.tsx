import { WHITE } from "src/styles/colors";
import styled from "styled-components";

interface HamburgerButtonProps {
  isCollapseOpen: boolean;
  setIsCollapseOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ButtonProps {
  isCloseButton: boolean;
}

const Button = styled.button<ButtonProps>`
  display: none;
  width: 28px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span {
    display: block;
    position: absolute;
    left: 0;
    height: 4px;
    width: 100%;
    background: ${WHITE};
    border-radius: 9px;
    opacity: 1;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: ${({ isCloseButton }) => (isCloseButton ? "10px" : "0px")};
      width: ${({ isCloseButton }) => (isCloseButton ? "0%" : "100%")};
      left: ${({ isCloseButton }) => (isCloseButton ? "50%" : "0")};
      transform: rotate(0deg);
    }
    &:nth-child(2) {
      top: 10px;
      transform: ${({ isCloseButton }) =>
        isCloseButton ? "rotate(45deg)" : "rotate(0deg)"};
    }
    &:nth-child(3) {
      top: 10px;
      transform: ${({ isCloseButton }) =>
        isCloseButton ? "rotate(-45deg)" : "rotate(0deg)"};
    }
    &:nth-child(4) {
      top: ${({ isCloseButton }) => (isCloseButton ? "10px" : "20px")};
      width: ${({ isCloseButton }) => (isCloseButton ? "0%" : "100%")};
      left: ${({ isCloseButton }) => (isCloseButton ? "50%" : "0")};
      transform: rotate(0deg);
    }
  }
  @media (max-width: 991px) {
    display: block;
  }
`;

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isCollapseOpen,
  setIsCollapseOpen,
}) => (
  <Button
    isCloseButton={isCollapseOpen}
    onClick={() => setIsCollapseOpen(!isCollapseOpen)}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </Button>
);

export default HamburgerButton;
