import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { NAV_Z_INDEX } from "src/utils/constants/layer-constants";
import { BLUE_EYES } from "src/styles/colors";
import { FAST } from "src/utils/constants/transition-speeds";
import { OPACITY_FADE } from "src/utils/constants/animation-constants";
import { scrollToTargetElement } from "src/utils/helpers";

const SCROLL_REACTION_THRESHOLD = 5;

const SCROLLED_BACKGROUND_COLOR = "rgba(26, 26, 26, 0.7)";
const SCROLLED_BOX_SHADOW = "0 0 8px 0 rgba(0, 0, 0, 0.3)";
const SCROLLED_BACKDROP_FILTER = "saturate(180%) blur(20px)";

interface ContainerProps {
  isScrolled: boolean;
}

const Container = styled.nav<ContainerProps>`
  position: fixed;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled && SCROLLED_BACKGROUND_COLOR};
  box-shadow: ${({ isScrolled }) => isScrolled && SCROLLED_BOX_SHADOW};
  backdrop-filter: ${({ isScrolled }) =>
    isScrolled && SCROLLED_BACKDROP_FILTER};
  z-index: ${NAV_Z_INDEX};

  @media (max-width: 991px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-left: 12px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  margin: 0 0 0 18px;
  transition: opacity ${FAST};
  &:hover {
    opacity: ${OPACITY_FADE};
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${BLUE_EYES};
`;

const ItemButton = styled.button`
  padding: 0;
  color: ${BLUE_EYES};
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Nav = () => {
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
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <StyledHomeLink to="/">
          <StaticImage
            src="../../images/otter-icon-nav-white.png"
            width={36}
            placeholder="tracedSVG"
            alt="otter"
          />
          <HomeLinkText>Max Christiansen Dev</HomeLinkText>
        </StyledHomeLink>
        <List>
          <Item>
            <ItemButton
              type="button"
              aria-label="scroll to expertise"
              onClick={() => scrollToTargetElement("expertise", 70)}
            >
              &#x2f;&#x2f;&nbsp;expertise
            </ItemButton>
          </Item>
          <Item>
            <ItemButton
              type="button"
              aria-label="scroll to work"
              onClick={() => scrollToTargetElement("work", 70)}
            >
              &#x2f;&#x2f;&nbsp;work
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
    </Container>
  );
};
export default Nav;
