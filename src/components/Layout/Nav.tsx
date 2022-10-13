import { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

const SCROLL_REACTION_THRESHOLD = 5;

interface ContainerProps {
  isOpaque: boolean;
}

const Container = styled.nav<ContainerProps>`
  position: fixed;
  width: 100%;
  background-color: ${({ isOpaque }) => isOpaque && "#ffffff"};
  box-shadow: ${({ isOpaque }) => isOpaque && "0 0 8px 0 rgba(0, 0, 0, 0.3)"};
  transition: background-color 250ms;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  padding: 6px 30px;
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 250ms;
  &:hover {
    opacity: 0.85;
  }
`;

interface TextProps {
  isDark: boolean;
}

const HomeLinkText = styled.div<TextProps>`
  margin-left: 12px;
  color: ${({ isDark }) => (isDark ? "#000000" : "#ffffff")};
  font-family: "Exo";
  font-size: 22px;
  transition: color 250ms;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  margin: 0 12px 0;
  transition: opacity 250ms;
  &:hover {
    opacity: 0.75;
  }
`;

interface IconDataProps {
  whiteIcon: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  blackIcon: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const StyledItemLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["isDark"].includes(prop),
})<TextProps>`
  text-decoration: none;
  color: ${({ isDark }) => (isDark ? "#000000" : "#ffffff")};
  font-family: "Exo";
  font-size: 22px;
  transition: color 250ms;
`;

const Nav = () => {
  const iconData: IconDataProps = useStaticQuery(graphql`
    {
      whiteIcon: file(name: { eq: "otter-icon-nav-white" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, quality: 100, width: 40)
        }
      }
      blackIcon: file(name: { eq: "otter-icon-nav-black" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, quality: 100, width: 40)
        }
      }
    }
  `);

  const whiteIcon = iconData.whiteIcon.childImageSharp.gatsbyImageData;
  const blackIcon = iconData.blackIcon.childImageSharp.gatsbyImageData;

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const userScrollY = window.scrollY;
    setIsScrolled(SCROLL_REACTION_THRESHOLD <= userScrollY);
    return isScrolled;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Container isOpaque={isScrolled}>
      <Wrapper>
        <StyledHomeLink to="/">
          <GatsbyImage image={isScrolled ? blackIcon : whiteIcon} alt="otter" />
          <HomeLinkText isDark={isScrolled}>Frontend Showcase</HomeLinkText>
        </StyledHomeLink>
        <List>
          <Item>
            <StyledItemLink isDark={isScrolled} to="/chambers/marquee">
              Marquee
            </StyledItemLink>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
};
export default Nav;
