import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import styled from "styled-components";
import { WHITE } from "src/styles/colors";
import {
  FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
} from "src/utils/constants/transition-speeds";
import { InViewProps } from "src/utils/types/inView";

const ImageContainer = styled.div<InViewProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10px;
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to bottom,
    ${WHITE} 0%,
    ${WHITE} 40%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    ${WHITE} 0%,
    ${WHITE} 40%,
    transparent 100%
  );
  opacity: ${({ inView }) => (inView ? "0.17" : "0")};
  transition: opacity ${FIVE_HUNDRED_MS} ${ONE_THOUSAND_MS};
  @media (max-width: 991px) {
    display: none;
  }
`;

const BackgroundImage: React.FC<InViewProps> = ({ inView }) => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "code-snapshot.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED, width: 700)
        }
      }
    }
  `);

  return (
    <ImageContainer inView={inView}>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
    </ImageContainer>
  );
};

export default BackgroundImage;
