import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const SCROLL_REACTION_THRESHOLD = 5;
const TRANSITION_TIME = "250ms";

interface ContainerProps {
  isScrolled: boolean;
}

const Container = styled.nav<ContainerProps>`
  position: fixed;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled && "rgba(26, 26, 26, 0.7)"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled && "0 0 8px 0 rgba(0, 0, 0, 0.3)"};
  backdrop-filter: ${({ isScrolled }) =>
    isScrolled && "saturate(180%) blur(20px)"};
  z-index: 1000;
  transition-property: background-color, backdrop-filter;
  transition-duration: ${TRANSITION_TIME};
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
  transition: opacity ${TRANSITION_TIME};
  &:hover {
    opacity: 0.85;
  }
`;

const HomeLinkText = styled.div`
  margin-left: 12px;
  color: #ffffff;
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
  transition: opacity ${TRANSITION_TIME};
  &:hover {
    opacity: 0.75;
  }
`;

const StyledItemLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  color: #00a1ef;
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
            <StyledItemLink to="#">&#x2f;&#x2f;&nbsp;expertise</StyledItemLink>
          </Item>
          <Item>
            <StyledItemLink to="#work">&#x2f;&#x2f;&nbsp;work</StyledItemLink>
          </Item>
          <Item>
            <StyledItemLink to="/frontend-showcase">
              &#x2f;&#x2f;&nbsp;showcase
            </StyledItemLink>
          </Item>
          <Item>
            <StyledItemLink to="#">&#x2f;&#x2f;&nbsp;contact</StyledItemLink>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
};
export default Nav;
