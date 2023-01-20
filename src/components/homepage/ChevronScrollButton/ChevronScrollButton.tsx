import styled from "styled-components";
import { scrollToTargetElement } from "src/utils/helpers/scrollToTargetElement";
import { BLUE_TEXT_GLOW_KEYFRAMES } from "src/utils/constants/animations";
import {
  THREE_THOUSAND_MS,
  FIVE_HUNDRED_MS,
} from "src/utils/constants/transitions";
import { Z_TWENTY } from "src/utils/constants/layers";
import { InViewProps } from "src/utils/types/inView";

import { GRIMACE } from "src/utils/constants/colors";

interface RenderProps {
  transitionDelay: string;
  hideOnMobile?: boolean;
}

interface ChevronScrollButtonProps extends InViewProps, RenderProps {
  targetElementId: string;
  targetElementOffsetTopValue: number;
}

const Wrapper = styled.div<InViewProps & RenderProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
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
  padding: 0px 10px 40px;
  background: none;
  border: none;
  font-size: 80px;
  font-weight: 900;
  line-height: 25%;
  cursor: pointer;
  -webkit-text-stroke: 2.5px ${GRIMACE};
  animation: ${BLUE_TEXT_GLOW_KEYFRAMES} ${THREE_THOUSAND_MS};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @media (max-width: 520px) {
    font-size: 60px;
  }
`;

const ChevronScrollButton: React.FC<ChevronScrollButtonProps> = ({
  targetElementId,
  targetElementOffsetTopValue,
  transitionDelay,
  hideOnMobile,
  inView,
}) => (
  <Wrapper
    transitionDelay={transitionDelay}
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
      &#x2304;
    </Button>
  </Wrapper>
);

export default ChevronScrollButton;
