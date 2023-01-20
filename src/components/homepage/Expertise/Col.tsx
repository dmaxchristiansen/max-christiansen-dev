import styled from "styled-components";
import {
  TRANSLUCENT_BLACK,
  BLUE_GRAY,
  CLEAR,
} from "src/utils/constants/colors";
import {
  COL_DELAY_ONE,
  COL_DELAY_TWO,
  COL_DELAY_THREE,
} from "src/components/homepage/Expertise/utils/constants";
import {
  FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
} from "src/utils/constants/transitions";
import { InViewProps } from "src/utils/types/inView";

interface ColProps {
  index: number;
}

const ColContainer = styled.div<ColProps & InViewProps>`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 40px 30px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  border-style: solid;
  border-color: ${BLUE_GRAY};
  border-width: ${({ index }) =>
    index === 0
      ? "4px 2px 4px 4px"
      : index === 1
      ? "4px 2px 4px 2px"
      : "4px 4px 4px 2px"};
  border-radius: ${({ index }) =>
    index === 0 ? "16px 0 0 2px" : index === 2 ? "0 2px 16px 0" : "none"};
  background-color: ${({ inView }) => (inView ? TRANSLUCENT_BLACK : CLEAR)};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 70px, 0)"};
  transition-property: background-color, opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS}, ${FIVE_HUNDRED_MS},
    ${ONE_THOUSAND_MS};
  transition-delay: ${({ index }) =>
    index === 0
      ? COL_DELAY_ONE
      : index === 1
      ? COL_DELAY_TWO
      : COL_DELAY_THREE};
  @media (max-width: 991px) {
    width: 100%;
    border-width: ${({ index }) =>
      index === 0
        ? "4px 4px 2px 4px"
        : index === 1
        ? "2px 4px 2px 4px"
        : "2px 4px 4px 4px"};
    border-radius: ${({ index }) =>
      index === 0 ? "16px 16px 0 0" : index === 2 ? "0 0 16px 16px" : "none"};
  }
`;

const Col: React.FC<ColProps & InViewProps & React.PropsWithChildren> = ({
  inView,
  index,
  children,
}) => (
  <ColContainer inView={inView} index={index}>
    {children}
  </ColContainer>
);

export default Col;
