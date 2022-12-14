import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IGatsbyImageDataQuery {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}
