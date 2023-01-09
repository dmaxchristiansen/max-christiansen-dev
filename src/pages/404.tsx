import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import styled from "styled-components";
import {
  FIVE_THOUSAND_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";
import { Y_SPIN_KEYFRAMES } from "src/utils/constants/animation-constants";
import {
  DARK_SHADOW,
  NARROW_BLUE_GLOW,
} from "src/utils/constants/shadow-constants";
import { ROYAL_BLUE, OBSIDIAN } from "src/styles/colors";
import Layout from "../components/global/Layout/Layout";
import Seo from "../components/global/Seo/Seo";

const Container = styled.div`
  min-height: 100vh;
  padding: 60px 30px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 100px 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  animation: ${Y_SPIN_KEYFRAMES} ${FIVE_THOUSAND_MS} linear infinite;
`;

const Header = styled.h1`
  line-height: 1;
  margin: 24px 0 24px;
  font-size: 75px;
  @media (min-width: 768px) {
    margin: 32px 0 32px;
    font-size: 100px;
  }
`;

const Message = styled.p`
  line-height: 1;
  margin: 0 0 40px;
  font-size: 24px;
  @media (min-width: 768px) {
    margin: 0 0 48px;
    font-size: 32px;
  }
`;

const StyledLink = styled(Link)`
  padding: 12px 24px;
  box-shadow: ${DARK_SHADOW};
  background-color: ${ROYAL_BLUE};
  border-radius: 16px;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 2px;
  text-decoration: none;
  transition: box-shadow ${TWO_FIFTY_MS}, background-color ${TWO_FIFTY_MS};
  &:hover {
    box-shadow: ${NARROW_BLUE_GLOW};
    background-color: ${OBSIDIAN};
  }
  &:focus {
    box-shadow: ${NARROW_BLUE_GLOW};
    background-color: ${OBSIDIAN};
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const NotFoundPage = () => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "four-o-four.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED, width: 300)
        }
      }
    }
  `);

  return (
    <Layout hideNav hideFooter>
      <Container>
        <ImageContainer>
          <ImageWrapper>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="sad face"
            />
          </ImageWrapper>
        </ImageContainer>
        <Header>404</Header>
        <Message>THIS PAGE IS UNAVAILABLE OR DOES NOT EXIST</Message>
        <StyledLink to="/">BACK TO HOME</StyledLink>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Page Not Found" noIndex />;

export default NotFoundPage;
