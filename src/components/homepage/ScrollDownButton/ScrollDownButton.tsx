import styled from "styled-components";
import { scrollToTargetElement } from "src/utils/helpers/scrollToTargetElement";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transitions";
import { Z_TWENTY } from "src/utils/constants/layers";
import { CLEAR, WHITE } from "src/utils/constants/colors";
import { InViewProps } from "src/utils/types/inView";

interface RenderProps {
  transitionDelay: string;
  isPositionAbsolute?: boolean;
  hideOnMobile?: boolean;
}

interface ScrollDownButtonProps extends InViewProps, RenderProps {
  targetElementId: string;
  targetElementOffsetTopValue: number;
}

const Wrapper = styled.div<InViewProps & RenderProps>`
  display: flex;
  justify-content: center;
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? "absolute" : "relative"};
  bottom: ${({ isPositionAbsolute }) => isPositionAbsolute && "20px"};
  width: 100%;
  margin-top: ${({ isPositionAbsolute }) => !isPositionAbsolute && "60px"};
  z-index: ${Z_TWENTY};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, -100px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${({ transitionDelay }) => transitionDelay};
  @media (max-width: 991px) {
    display: ${({ hideOnMobile }) => hideOnMobile && "none"};
    position: relative;
    bottom: 0;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  padding: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ArrowPoint = styled.div`
  width: 0px;
  height: 0px;
  border-top: 12px solid ${WHITE};
  border-left: 14px solid ${CLEAR};
  border-right: 14px solid ${CLEAR};
`;

const ArrowBase = styled.div`
  height: 16px;
  width: 12px;
  margin: 0px auto;
  background-color: ${WHITE};
`;

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetElementId,
  targetElementOffsetTopValue,
  transitionDelay,
  isPositionAbsolute,
  hideOnMobile,
  inView,
}) => (
  <Wrapper
    transitionDelay={transitionDelay}
    isPositionAbsolute={isPositionAbsolute}
    hideOnMobile={hideOnMobile}
    inView={inView}
  >
    <Button
      type="button"
      aria-label={`scroll to ${targetElementId}`}
      onClick={() =>
        scrollToTargetElement(targetElementId, targetElementOffsetTopValue)
      }
    >
      <ArrowBase />
      <ArrowPoint />
    </Button>
  </Wrapper>
);

export default ScrollDownButton;
