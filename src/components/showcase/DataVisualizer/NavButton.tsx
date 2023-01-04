import styled from "styled-components";
import { ActiveProps } from "./types/dataVisualizer";
import {
  DARK_SHADOW,
  LIGHT_BLUE_SHADOW,
} from "src/utils/constants/shadow-constants";
import { OBSIDIAN, ROYAL_BLUE, GRIMACE_LIGHTLY } from "src/styles/colors";
import { ONE_HUNDRED_MS } from "src/utils/constants/transition-speeds";

interface NavButtonProps {
  buttonLabel: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonIdProps {
  buttonId: string;
}

const Button = styled.button<ActiveProps & ButtonIdProps>`
  display: block;
  padding: 6px 12px;
  box-shadow: ${({ active, buttonId }) =>
    active === buttonId ? LIGHT_BLUE_SHADOW : DARK_SHADOW};
  border: none;
  border-radius: 6px;
  background-color: ${({ active, buttonId }) =>
    active === buttonId ? OBSIDIAN : ROYAL_BLUE};
  outline: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color ${ONE_HUNDRED_MS}, box-shadow ${ONE_HUNDRED_MS};
  &:hover {
    background-color: ${GRIMACE_LIGHTLY};
    box-shadow: ${LIGHT_BLUE_SHADOW};
  }
  &:focus {
    background-color: ${OBSIDIAN};
    box-shadow: ${LIGHT_BLUE_SHADOW};
  }
`;

const NavButton: React.FC<NavButtonProps & ButtonIdProps & ActiveProps> = ({
  buttonId,
  buttonLabel,
  active,
  setActiveButton,
}) => (
  <Button
    type="button"
    active={active}
    buttonId={buttonId ?? ""}
    onClick={() => setActiveButton(buttonId ?? "")}
  >
    {buttonLabel}
  </Button>
);

export default NavButton;
