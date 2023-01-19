import styled from "styled-components";
import { WHITE } from "src/styles/colors";
import { scrollToTargetElement } from "src/utils/scrollToTargetElement";

interface ChevronScrollButtonProps {
  targetElementId: string;
  targetElementOffsetTopValue: number;
}

const Button = styled.button`
  margin: 0;
  padding: 2px 14px 18px;
  background: none;
  border: none;
  line-height: 1;
  cursor: pointer;
`;

const Chevron = styled.div`
  width: 24px;
  height: 24px;
  border-right: 4px solid ${WHITE};
  border-bottom: 4px solid ${WHITE};
  transform: rotate(45deg);
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
    <Chevron />
  </Button>
);

export default ChevronScrollButton;
