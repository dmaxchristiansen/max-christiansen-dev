import { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Z_ONE_THOUSAND } from "src/utils/constants/layers";
import { TWO_FIFTY_MS } from "src/utils/constants/transitions";
import {
  BLUE_EYES,
  GRIMACE,
  NAV_BACKGROUND_COLOR,
} from "src/utils/constants/colors";
import { DARK_SHADOW, NAV_BACKDROP_FILTER } from "src/utils/constants/shadows";
import { NAV_PADDING, STANDARD_WIDTH } from "src/utils/constants/layouts";

import { navConfig } from "./utils/navConfig";
import useHandleScroll from "src/utils/hooks/useHandleScroll";
import HamburgerButton from "./HamburgerButton";
import OtterSvg from "src/components/svgs/OtterSvg/OtterSvg";

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
  max-width: ${STANDARD_WIDTH};
  margin: 0 auto;
  padding: ${NAV_PADDING};
  font-size: 20px;
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  div {
    transition: color ${TWO_FIFTY_MS};
  }
  svg {
    transition: fill ${TWO_FIFTY_MS};
  }
  &:hover {
    @media (min-width: 992px) {
      svg {
        fill: ${BLUE_EYES};
      }
      div {
        color: ${BLUE_EYES};
      }
    }
  }
`;

const HomeLinkText = styled.div`
  margin: auto 0 0 8px;
  @media (min-width: 992px) {
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
  @media (min-width: 992px) {
    margin: 0 0 0 18px;
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  transition: color ${TWO_FIFTY_MS};
  &:hover {
    @media (min-width: 992px) {
      color: ${BLUE_EYES};
    }
  }
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
  const navRef = useRef<HTMLElement | null>(null);

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const isScrolled = useHandleScroll(5);

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
            <OtterSvg />
            <HomeLinkText>Max Christiansen Dev</HomeLinkText>
          </StyledHomeLink>
          <HamburgerButton
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
