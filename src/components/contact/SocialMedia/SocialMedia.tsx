import styled from "styled-components";
import GitHubSvg from "src/components/svgs/GitHubSvg";
import LinkedInSvg from "src/components/svgs/LinkedInSvg";

const Container = styled.div`
  display: flex;
`;

const SocialMedia = () => (
  <Container>
    <GitHubSvg height={96} />
    <LinkedInSvg height={96} />
  </Container>
);

export default SocialMedia;
