import styled from "styled-components";
import {
  BUTTON_OPACITY_FADE,
  BUTTON_TRANSITION_SPEED,
} from "./utils/constants";
import CloseIcon from "./CloseIcon";

interface CloseButtonProps {
  isButtonFocusable: boolean;
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  onButtonClick: () => void;
}

const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 2px;
  background: none;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  cursor: pointer;
  transition: opacity, border ${BUTTON_TRANSITION_SPEED};

  &:hover {
    opacity: ${BUTTON_OPACITY_FADE};
    border: 2px solid #ffffff;
  }

  &:focus {
    border: 2px solid #ffffff;
  }
`;

const CloseButton: React.FC<CloseButtonProps> = ({
  isButtonFocusable,
  videoRef,
  onButtonClick,
}) => {
  const handleOnButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onButtonClick();
  };

  return (
    <Button
      type="button"
      aria-label="Close video"
      tabIndex={isButtonFocusable ? undefined : -1}
      onClick={handleOnButtonClick}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
