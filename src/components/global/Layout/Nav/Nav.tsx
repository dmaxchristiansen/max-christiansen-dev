import { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import styled from "styled-components";
import { Z_ONE_THOUSAND } from "src/utils/constants/layer-constants";
import { TWO_FIFTY_MS } from "src/utils/constants/transition-speeds";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import { GRIMACE } from "src/styles/colors";
import { DARK_SHADOW } from "src/utils/constants/shadow-constants";
import { navConfig } from "./utils/navConfig";
import Hamburger from "./Hamburger";

const SCROLL_REACTION_THRESHOLD = 5;

const NAV_BACKGROUND_COLOR = "rgba(26, 26, 26, 0.7)";
const NAV_BACKDROP_FILTER = "saturate(180%) blur(20px)";

interface NavContainerProps {
  isScrolled: boolean;
  isCollapseOpen: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  position: fixed;
  width: 100%;
  background-color: ${GRIMACE};
  box-shadow: ${DARK_SHADOW};
  z-index: ${Z_ONE_THOUSAND};
  @media (min-width: 992px) {
    background-color: ${({ isScrolled }) =>
      isScrolled ? NAV_BACKGROUND_COLOR : "transparent"};
    box-shadow: ${({ isScrolled }) => (isScrolled ? DARK_SHADOW : "none")};
    backdrop-filter: ${({ isScrolled }) =>
      isScrolled ? NAV_BACKDROP_FILTER : "none"};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1350px;
  margin: 0 auto;
  padding: 6px 30px;
  font-size: 20px;
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity ${TWO_FIFTY_MS};
  &:hover {
    opacity: ${OPACITY_FADE};
  }
`;

const HomeLinkText = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    margin-left: 12px;
  }
`;

const List = styled.ul`
  display: none;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const Item = styled.li`
  list-style: none;
  margin: 30px 30px;
  transition: opacity ${TWO_FIFTY_MS};
  &:hover {
    opacity: ${OPACITY_FADE};
  }
  @media (min-width: 992px) {
    margin: 0 0 0 18px;
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

interface MobileCollapseListProps {
  isCollapseOpen: boolean;
}

const MobileCollapseList = styled.ul<MobileCollapseListProps>`
  position: fixed;
  top: 41px;
  right: ${({ isCollapseOpen }) => (isCollapseOpen ? "0" : "-210px")};
  margin: 0;
  padding: 0;
  z-index: ${Z_ONE_THOUSAND};
  background-color: black;
  background-color: ${GRIMACE};
  box-shadow: ${DARK_SHADOW};
  border-bottom-left-radius: 20px;
  clip-path: inset(-0px -12px -12px -12px);
  transition: right ${TWO_FIFTY_MS} linear;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Nav: React.FC = () => {
  const data: IGatsbyImageDataQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "otter-icon-nav-white.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: TRACED_SVG, width: 36)
        }
      }
    }
  `);

  const navRef = useRef<HTMLElement | null>(null);

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
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

  useEffect(() => {
    if (isCollapseOpen && navRef.current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCollapseOpen]);

  return (
    <>
      <NavContainer
        ref={navRef}
        isScrolled={isScrolled}
        isCollapseOpen={isCollapseOpen}
      >
        <Wrapper>
          <StyledHomeLink to="/" onClick={() => setIsCollapseOpen(false)}>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="otter"
            />
            <HomeLinkText>Max Christiansen Dev</HomeLinkText>
          </StyledHomeLink>
          <Hamburger
            isCollapseOpen={isCollapseOpen}
            setIsCollapseOpen={setIsCollapseOpen}
          />
          <List>
            {navConfig.map(navItem => (
              <Item key={navItem.label}>
                <ItemLink to={navItem.destination}>
                  &#x2f;&#x2f;&nbsp;{navItem.label}
                </ItemLink>
              </Item>
            ))}
          </List>
        </Wrapper>
        <MobileCollapseList isCollapseOpen={isCollapseOpen}>
          {navConfig.map(mobileNavItem => (
            <Item key={mobileNavItem.label}>
              <ItemLink
                to={mobileNavItem.destination}
                onClick={() => setIsCollapseOpen(false)}
              >
                &#x2f;&#x2f;&nbsp;{mobileNavItem.label}
              </ItemLink>
            </Item>
          ))}
        </MobileCollapseList>
      </NavContainer>
    </>
  );
};
export default Nav;
