import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  padding: 12px 30px;
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

const HomeLinkText = styled.div`
  margin-left: 12px;
  color: #ffffff;
  font-family: "Exo";
  font-size: 22px;
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
    opacity: 0.85;
  }
`;

const StyledItemLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-family: "Exo";
  font-size: 22px;
`;

const Nav = () => (
  <Container>
    <Wrapper>
      <StyledHomeLink to="/">
        <StaticImage
          src="../../images/otter-icon-nav.png"
          alt=""
          width={40}
          placeholder="tracedSVG"
        />
        <HomeLinkText>Frontend Showcase</HomeLinkText>
      </StyledHomeLink>
      <List>
        <Item>
          <StyledItemLink to="/chambers/marquee">Marquee</StyledItemLink>
        </Item>
      </List>
    </Wrapper>
  </Container>
);

export default Nav;
