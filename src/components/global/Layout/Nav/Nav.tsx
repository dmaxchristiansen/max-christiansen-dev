import { useState, useEffect, useRef } from "react";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageDataQuery } from "src/utils/types/gatsbyImage";
import styled from "styled-components";
import { NAV_Z_INDEX } from "src/utils/constants/layer-constants";
import { FAST } from "src/utils/constants/transition-speeds";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import { scrollToTargetElement } from "src/utils/helpers";
import Hamburger from "./Hamburger";
import { GRIMACE } from "src/styles/colors";

const SCROLL_REACTION_THRESHOLD = 5;

const NAV_BACKGROUND_COLOR = "rgba(26, 26, 26, 0.7)";
const NAV_BOX_SHADOW = "0 0 8px 0 rgba(0, 0, 0, 0.8)";
const NAV_BACKDROP_FILTER = "saturate(180%) blur(20px)";

interface NavProps {
  isHomeNav: boolean | undefined;
}

interface NavContainerProps {
  isScrolled: boolean;
  isCollapseOpen: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  position: fixed;
  width: 100%;
  background-color: ${GRIMACE};
  box-shadow: ${NAV_BOX_SHADOW};
  z-index: ${NAV_Z_INDEX};
  @media (min-width: 992px) {
    background-color: ${({ isScrolled }) =>
      isScrolled ? NAV_BACKGROUND_COLOR : "transparent"};
    box-shadow: ${({ isScrolled }) => (isScrolled ? NAV_BOX_SHADOW : "none")};
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
  transition: opacity ${FAST};
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
  transition: opacity ${FAST};
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

const ItemButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
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
  z-index: ${NAV_Z_INDEX};
  background-color: black;
  background-color: ${GRIMACE};
  box-shadow: ${NAV_BOX_SHADOW};
  border-bottom-left-radius: 20px;
  clip-path: inset(-0px -12px -12px -12px);
  transition: right ${FAST} linear;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Nav: React.FC<NavProps> = ({ isHomeNav }) => {
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

  const handleItemButtonClick = (activeElement: string) => {
    if (isHomeNav) {
      scrollToTargetElement(activeElement, 60);
    } else {
      void navigate(`/?active=${activeElement}`);
    }
  };

  return (
    <>
      <NavContainer
        ref={navRef}
        isScrolled={isScrolled}
        isCollapseOpen={isCollapseOpen}
      >
        <Wrapper>
          <StyledHomeLink to="/">
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
            <Item>
              <ItemButton
                type="button"
                aria-label="navigate or scroll to expertise section"
                onClick={() => handleItemButtonClick("expertise")}
              >
                &#x2f;&#x2f;&nbsp;expertise
              </ItemButton>
            </Item>
            <Item>
              <ItemButton
                type="button"
                aria-label="navigate or scroll to experience section"
                onClick={() => handleItemButtonClick("experience")}
              >
                &#x2f;&#x2f;&nbsp;experience
              </ItemButton>
            </Item>
            <Item>
              <ItemLink to="/showcase">&#x2f;&#x2f;&nbsp;showcase</ItemLink>
            </Item>
            <Item>
              <ItemLink to="/contact">&#x2f;&#x2f;&nbsp;contact</ItemLink>
            </Item>
          </List>
        </Wrapper>
        <MobileCollapseList isCollapseOpen={isCollapseOpen}>
          <Item>
            <ItemButton
              type="button"
              aria-label="navigate or scroll to expertise section"
              onClick={() => {
                handleItemButtonClick("expertise");
                setIsCollapseOpen(false);
              }}
            >
              &#x2f;&#x2f;&nbsp;expertise
            </ItemButton>
          </Item>
          <Item>
            <ItemButton
              type="button"
              aria-label="navigate or scroll to experience section"
              onClick={() => {
                handleItemButtonClick("experience");
                setIsCollapseOpen(false);
              }}
            >
              &#x2f;&#x2f;&nbsp;experience
            </ItemButton>
          </Item>
          <Item>
            <ItemLink to="/showcase">&#x2f;&#x2f;&nbsp;showcase</ItemLink>
          </Item>
          <Item>
            <ItemLink to="/contact">&#x2f;&#x2f;&nbsp;contact</ItemLink>
          </Item>
        </MobileCollapseList>
      </NavContainer>
    </>
  );
};
export default Nav;
