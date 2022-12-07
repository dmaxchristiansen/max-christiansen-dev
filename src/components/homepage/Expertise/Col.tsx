import styled from "styled-components";
import { BLACK, BLUE_GRAY, CLEAR } from "src/styles/colors";
import { InViewProps } from "src/components/homepage/types/homepage";

interface ColProps {
  index: number;
}

const Container = styled.div<ColProps & InViewProps>`
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
  background-color: ${({ inView }) => (inView ? BLACK : CLEAR)};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition-property: background-color, opacity, transform;
  transition-duration: 900ms, 900ms, 450ms;
  transition-delay: ${({ index }) =>
    index === 0 ? "0" : index === 1 ? "150ms" : "300ms"};
  @media (max-width: 991px) {
    width: 100%;
    opacity: 1;
    border-width: ${({ index }) =>
      index === 0
        ? "4px 4px 2px 4px"
        : index === 1
        ? "2px 4px 2px 4px"
        : "2px 4px 4px 4px"};
    border-radius: ${({ index }) =>
      index === 0 ? "16px 16px 0 0" : index === 2 ? "0 0 16px 16px" : "none"};
    background-color: ${BLACK};
    transform: none;
    transition: none;
  }
`;

const Col: React.FC<ColProps & InViewProps & React.PropsWithChildren> = ({
  inView,
  index,
  children,
}) => (
  <Container inView={inView} index={index}>
    {children}
  </Container>
);

export default Col;
