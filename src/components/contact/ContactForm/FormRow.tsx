import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { InViewProps } from "src/utils/types/inView";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import {
  FIVE_HUNDRED_MS,
  FOUR_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import ContactForm from "./ContactForm";

const FlexRow = styled.div<InViewProps>`
  display: flex;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FOUR_FIFTY_MS};
  transition-delay: ${FIVE_HUNDRED_MS};
`;

const ImageWrapper = styled.div``;

const FormRow: React.FC<InViewProps> = ({ inView }) => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dmc-raft-profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `);

  return (
    <FlexRow inView={inView}>
      <ImageWrapper>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="Max Christiansen"
        />
      </ImageWrapper>
      <ContactForm inView={inView} />
    </FlexRow>
  );
};

export default FormRow;
