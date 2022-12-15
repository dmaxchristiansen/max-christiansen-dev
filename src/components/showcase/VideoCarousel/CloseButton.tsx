import styled from "styled-components";
import { TWO_FIFTY } from "src/utils/constants/transition-speeds";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import { CLEAR, WHITE } from "src/styles/colors";
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
  border: 2px solid ${CLEAR};
  border-radius: 5px;
  cursor: pointer;
  transition: opacity, border ${TWO_FIFTY};

  &:hover {
    opacity: ${OPACITY_FADE};
    border: 2px solid ${WHITE};
  }

  &:focus {
    border: 2px solid ${WHITE};
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
