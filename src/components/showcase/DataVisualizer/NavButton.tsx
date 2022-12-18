import styled from "styled-components";
import {
  DARK_SHADOW,
  LIGHT_BLUE_SHADOW,
} from "src/utils/constants/shadow-constants";
import { OBSIDIAN, ROYAL_BLUE } from "src/styles/colors";
import { TWO_FIFTY } from "src/utils/constants/transition-speeds";

interface ButtonProps {
  activeButton: string;
  buttonId: string;
}

interface NavButtonProps extends ButtonProps {
  buttonLabel: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

const Button = styled.button<ButtonProps>`
  display: block;
  padding: 6px 12px;
  background-color: ${({ activeButton, buttonId }) =>
    activeButton === buttonId ? OBSIDIAN : ROYAL_BLUE};
  border: none;
  border-radius: 6px;
  box-shadow: ${DARK_SHADOW};
  outline: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color ${TWO_FIFTY}, box-shadow ${TWO_FIFTY};
  &:hover {
    background-color: ${OBSIDIAN};
    box-shadow: ${LIGHT_BLUE_SHADOW};
  }
  &:focus {
    background-color: ${OBSIDIAN};
    box-shadow: ${LIGHT_BLUE_SHADOW};
  }
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
    buttonId={buttonId}
    onClick={() => setActiveButton(buttonId)}
  >
    {buttonLabel}
  </Button>
);

export default NavButton;
