import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { SPIN_KEYFRAMES } from "src/utils/constants/animation-constants";
import { SNAIL } from "src/utils/constants/transition-speeds";

interface SpinningOtterProps {
  margin: string;
}

const Container = styled.div<SpinningOtterProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ margin }) => margin};
  perspective: 500px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 400px;
  animation: ${SPIN_KEYFRAMES} ${SNAIL} linear infinite;
  @media (max-width: 520px) {
    max-width: 300px;
  }
`;

const SpinningOtter: React.FC<SpinningOtterProps> = ({ margin }) => (
  <Container margin={margin}>
    <Wrapper>
      <StaticImage
        src="../../images/otter-friend.png"
        alt="otter"
        width={400}
        placeholder="tracedSVG"
      />
    </Wrapper>
  </Container>
);

export default SpinningOtter;
