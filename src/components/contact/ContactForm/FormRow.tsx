import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { InViewProps } from "src/utils/types/inView";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import { FIVE_HUNDRED_MS } from "src/utils/constants/transition-speeds";
import { NARROW_BLUE_GLOW } from "src/utils/constants/shadow-constants";
import ContactForm from "./ContactForm";

const FlexRow = styled.div<InViewProps>`
  display: flex;
  justify-content: space-between;
  height: 354px;
  margin: 60px 0 140px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: transform, opacity;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${FIVE_HUNDRED_MS};
  @media (max-width: 767px) {
    height: 394px;
  }
  @media (max-width: 520px) {
    margin: 20px 0 100px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 35px;
  max-width: 249px;
  @media (max-width: 991px) {
    display: none;
  }
`;

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
      <ContactForm inView={inView} />

      <ImageWrapper>
        <GatsbyImage
          style={{ borderRadius: 16, boxShadow: NARROW_BLUE_GLOW }}
          imgStyle={{ borderRadius: 16 }}
          image={data.file.childImageSharp.gatsbyImageData}
          alt="Max Christiansen"
        />
      </ImageWrapper>
    </FlexRow>
  );
};

export default FormRow;
