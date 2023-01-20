import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";

const ProfileImage = () => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dmc-brick-profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      style={{ borderRadius: 16 }}
      imgStyle={{ borderRadius: 16 }}
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Max Christiansen"
    />
  );
};

export default ProfileImage;
