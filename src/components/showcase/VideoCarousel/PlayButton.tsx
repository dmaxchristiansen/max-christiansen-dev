import styled from "styled-components";
import { FAST } from "src/utils/constants/transition-speeds";
import { CAROUSEL_PLAY_BUTTON_Z_INDEX } from "src/utils/constants/layer-constants";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import PlayIcon from "./PlayIcon";

interface PlayButtonProps {
  isButtonFocusable: boolean;
  attribution: string;
  onButtonClick: () => void;
}

const Button = styled.button`
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 0;
  z-index: ${CAROUSEL_PLAY_BUTTON_Z_INDEX};
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity ${FAST};
  &:hover {
    opacity: ${OPACITY_FADE};
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
