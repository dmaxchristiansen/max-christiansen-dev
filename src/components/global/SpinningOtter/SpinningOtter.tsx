import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import { Y_SPIN_KEYFRAMES } from "src/utils/constants/animation-constants";
import { FIVE_THOUSAND_MS } from "src/utils/constants/transition-speeds";

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
  animation: ${Y_SPIN_KEYFRAMES} ${FIVE_THOUSAND_MS} linear infinite;
  @media (max-width: 520px) {
    max-width: 300px;
  }
`;

const SpinningOtter: React.FC<SpinningOtterProps> = ({ margin }) => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "otter-friend.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: TRACED_SVG, width: 400)
        }
      }
    }
  `);

  return (
    <Container margin={margin}>
      <Wrapper>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="otter"
        />
      </Wrapper>
    </Container>
  );
};

export default SpinningOtter;
