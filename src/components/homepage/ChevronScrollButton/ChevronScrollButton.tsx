import styled from "styled-components";
import { scrollToTargetElement } from "src/utils/scrollToTargetElement";
import { BLUE_TEXT_GLOW_KEYFRAMES } from "src/utils/constants/animation-constants";
import { THREE_THOUSAND_MS } from "src/utils/constants/transition-speeds";

import { OBSIDIAN } from "src/styles/colors";

interface ChevronScrollButtonProps {
  targetElementId: string;
  targetElementOffsetTopValue: number;
}

const Button = styled.button`
  padding: 0px 10px 40px;
  background: none;
  border: none;
  font-size: 80px;
  font-weight: 900;
  line-height: 25%;
  cursor: pointer;
  -webkit-text-stroke: 2.5px ${OBSIDIAN};
  animation: ${BLUE_TEXT_GLOW_KEYFRAMES} ${THREE_THOUSAND_MS};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const ChevronScrollButton: React.FC<ChevronScrollButtonProps> = ({
  targetElementId,
  targetElementOffsetTopValue,
}) => (
  <Button
    type="button"
    aria-label={`scroll to ${targetElementId}`}
    onClick={() =>
      scrollToTargetElement(targetElementId, targetElementOffsetTopValue)
    }
  >
    &#x2304;
  </Button>
);

export default ChevronScrollButton;
