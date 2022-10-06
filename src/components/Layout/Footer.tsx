import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

interface DataProps {
  diffLastUpdate: { nodes: [{ buildTime: string }] };
}

const Container = styled.div`
  margin-top: auto;
  padding-bottom: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  margin: 0 auto;
  color: #f8f9fa;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
  margin: 6px 6px 0;
  line-height: 1;
  font-family: "Exo";
  font-size: 20px;
  @media (min-width: 768px) {
    margin: 6px 18px 0;
  }
`;

const Link = styled.a`
  color: #f8f9fa;
  font-family: "Exo";
  font-weight: 400;
`;

const Footer: React.FC = () => {
  const data: DataProps = useStaticQuery(graphql`
    {
      diffLastUpdate: allSiteBuildMetadata {
        nodes {
          buildTime(fromNow: true)
        }
      }
    }
  `);

  return (
    <Container>
      <Wrapper>
        <Text>
          © {new Date().getFullYear()}&nbsp;-&nbsp;
          <Link
            href="mailto:dmaxchristiansen@gmail.com?subject=Frontend Showcase Inquiry"
            target="_blank"
            rel="noreferrer"
          >
            Max Christiansen
          </Link>
        </Text>
        <Text>Updated {data.diffLastUpdate.nodes[0].buildTime}</Text>
      </Wrapper>
    </Container>
  );
};

export default Footer;
