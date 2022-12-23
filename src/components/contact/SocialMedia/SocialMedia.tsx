import styled from "styled-components";
import { InViewProps } from "src/utils/types/inView";
import {
  FOUR_FIFTY_MS,
  ONE_THOUSAND_MS,
} from "src/utils/constants/transition-speeds";
import GitHubSvg from "src/components/svgs/GitHubSvg";
import LinkedInSvg from "src/components/svgs/LinkedInSvg";

const Container = styled.div<InViewProps>`
  display: flex;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${ONE_THOUSAND_MS};
`;

const SocialMedia: React.FC<InViewProps> = ({ inView }) => (
  <Container inView={inView}>
    <GitHubSvg height={96} />
    <LinkedInSvg height={96} />
  </Container>
);

export default SocialMedia;
