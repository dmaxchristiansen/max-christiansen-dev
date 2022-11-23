import { Link } from "gatsby";
import styled from "styled-components";
import {
  FUTURE_BLUE,
  PURPLE_PASTEL,
  CANDY_BLUE,
  MAVEN_BLUE,
  BLUE_DREAM,
  DUSKY_BLUE,
  BLUE_SKY,
  BLUE_EYES,
  WHITE,
  PEACHY,
  HOT_PINK,
  PURPLE_HAZE,
  BLUE_GRAY,
  BLUE_GRIMLY,
  GRIMACE,
} from "src/styles/colors";
import { MEDIUM, TURTLE } from "src/utils/constants/transition-speeds";
import { TEXT_GLOW_KEYFRAMES } from "src/utils/constants/animation-constants";
import Layout from "src/components/Layout/Layout";
import Seo from "src/components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  perspective: 700px;
  overflow: hidden;
`;

const Grid = styled.div`
  position: absolute;
  bottom: -120%;
  height: 300%;
  width: 200%;
  background: linear-gradient(
      transparent 65%,
      ${FUTURE_BLUE} 75%,
      ${PURPLE_PASTEL} 80%,
      ${FUTURE_BLUE} 85%,
      transparent 95%
    ),
    linear-gradient(
      90deg,
      transparent 65%,
      ${FUTURE_BLUE} 75%,
      ${PURPLE_PASTEL} 80%,
      ${FUTURE_BLUE} 85%,
      transparent 95%
    );
  background-size: 30px 30px;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%);
  transform: rotateX(-100deg);
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Lines = styled.div`
  position: fixed;
  height: 72px;
  width: 100%;
  background: linear-gradient(
    ${MAVEN_BLUE} 20%,
    ${CANDY_BLUE} 40%,
    ${CANDY_BLUE} 60%,
    ${MAVEN_BLUE} 80%
  );
  background-size: 1px 8px;
  box-shadow: 0 0 16px ${BLUE_DREAM};
  transform: translateY(-26px);
  @media (max-width: 520px) {
    position: relative;
    transform: translateY(-100px);
    height: 24px;
  }
`;

const Header = styled.h1`
  position: relative;
  top: -58px;
  margin: 0;
  font-size: 180px;
  letter-spacing: 4px;
  transform: skew(-15deg);
  &:after {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    height: 72px;
    width: 72px;
    background: radial-gradient(
        white 3%,
        rgba(255, 255, 255, 0.3) 15%,
        rgba(255, 255, 255, 0.05) 60%,
        transparent 80%
      ),
      radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50% /
        5% 100%,
      radial-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 60%) 50% 50% /
        70% 5%;
    background-repeat: no-repeat;
  }
  @media (max-width: 1000px) {
    font-size: 90px;
    top: -25px;
    &:after {
      top: 6px;
      height: 36px;
      width: 36px;
    }
  }
  @media (max-width: 520px) {
    top: -150px;
    font-size: 60px;
    &:after {
      top: -2px;
      right: -6px;
    }
  }
`;

const FirstSpan = styled.span`
  display: block;
  text-shadow: 0 0 18px ${DUSKY_BLUE}, 0 0 36px black, 0 0 200px ${BLUE_SKY};
  -webkit-text-stroke: 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) {
    text-shadow: 0 0 9px ${DUSKY_BLUE}, 0 0 18px black, 0 0 100px ${BLUE_SKY};
    -webkit-text-stroke: 6px rgba(0, 0, 0, 0.5);
  }
`;

const SecondSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(
    ${BLUE_GRIMLY} 25%,
    ${BLUE_EYES} 35%,
    ${WHITE} 50%,
    ${GRIMACE} 50%,
    ${PURPLE_HAZE} 55%,
    ${PEACHY} 75%
  );
  -webkit-background-clip: text;
  -webkit-text-stroke: 1.6px ${BLUE_GRAY};
  -webkit-text-fill-color: transparent;
  @media (max-width: 1000px) {
    -webkit-text-stroke: 1px ${BLUE_GRAY};
  }
`;

const Subheader = styled.h2`
  position: absolute;
  top: 40%;
  margin: 0;
  z-index: 100;
  font-family: "Mr Dafoe";
  font-size: 172px;
  animation: ${TEXT_GLOW_KEYFRAMES} ${TURTLE};
  animation-iteration-count: infinite;
  @media (max-width: 1000px) {
    font-size: 86px;
    top: 45%;
  }
  @media (max-width: 520px) {
    position: relative;
    top: -150px;
    font-size: 72px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  top: 70%;
  padding: 15px 25px;
  z-index: 100;
  box-shadow: 0 0 24px 6px ${BLUE_EYES};
  background-color: ${BLUE_EYES};
  border: 2px solid ${PEACHY};
  border-radius: 16px;
  color: ${PURPLE_HAZE};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2px;
  text-decoration: none;
  transition: color, background-color, box-shadow;
  transition-duration: ${MEDIUM};
  &:hover {
    box-shadow: 0 0 48px 12px ${HOT_PINK};
    background-color: ${PURPLE_HAZE};
    color: ${HOT_PINK};
  }
  @media (max-width: 520px) {
    top: 65%;
  }
`;

const FrontendShowcasePage = () => (
  <Layout hideNav hideFooter>
    <Container>
      <Grid />
      <Lines />
      <Header>
        <FirstSpan>FRONTEND</FirstSpan>
        <SecondSpan>FRONTEND</SecondSpan>
      </Header>
      <Subheader>Showcase</Subheader>
      <StyledLink to="/showcase/components">ENTER</StyledLink>
    </Container>
  </Layout>
);

export const Head = () => (
  <Seo
    title="Frontend Showcase"
    description="A showcase of frontend React components built in Gatsby"
    pathname="/showcase"
  />
);

export default FrontendShowcasePage;
