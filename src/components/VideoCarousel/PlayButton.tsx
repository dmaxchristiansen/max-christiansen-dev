import styled from "styled-components";
import { BUTTON_OPACITY_FADE } from "./utils/constants";
import PlayIcon from "./PlayIcon";

interface PlayButtonProps {
  isButtonFocusable: boolean;
  attribution: string;
  onButtonClick: () => void;
}

const BUTTON_Z_INDEX = "10";

const Button = styled.button`
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 0;
  z-index: ${BUTTON_Z_INDEX};
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: ${BUTTON_OPACITY_FADE};
  }
  @media (min-width: 992px) {
    left: 24px;
    bottom: 24px;
  }
`;

const PlayButton: React.FC<PlayButtonProps> = ({
  isButtonFocusable,
  attribution,
  onButtonClick,
}) => (
  <Button
    type="button"
    aria-label={`play video from ${attribution}`}
    tabIndex={isButtonFocusable ? undefined : -1}
    onClick={onButtonClick}
  >
    <PlayIcon />
  </Button>
);

export default PlayButton;
