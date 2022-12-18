import styled from "styled-components";

interface ButtonProps {
  activeButton: string;
}

interface NavButtonProps extends ButtonProps {
  buttonId: string;
  buttonLabel: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

const Button = styled.button<ButtonProps>`
  display: block;
  padding: 0 0 5px;
  background: none;
  border: none;
`;

const NavButton: React.FC<NavButtonProps> = ({
  buttonId,
  buttonLabel,
  activeButton,
  setActiveButton,
}) => (
  <Button
    type="button"
    activeButton={activeButton}
    onClick={() => setActiveButton(buttonId)}
  >
    {buttonLabel}
  </Button>
);

export default NavButton;
