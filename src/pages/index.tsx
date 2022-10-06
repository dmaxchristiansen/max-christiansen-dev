import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  perspective: 700px;
  overflow: hidden;
  @media (max-width: 520px) {
    perspective: 800px;
  }
`;

const Grid = styled.div`
  position: absolute;
  bottom: -120%;
  height: 300%;
  width: 200%;
  background: linear-gradient(
      transparent 65%,
      rgba(46, 38, 255, 0.4) 75%,
      #7d41e6 80%,
      rgba(46, 38, 255, 0.4) 85%,
      transparent 95%
    ),
    linear-gradient(
      90deg,
      transparent 65%,
      rgba(46, 38, 255, 0.4) 75%,
      #7d41e6 80%,
      rgba(46, 38, 255, 0.4) 85%,
      transparent 95%
    );
  background-size: 30px 30px;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%);
  transform: rotateX(-100deg);
  @media (max-width: 520px) {
    bottom: -100%;
    transform: rotateX(-105deg);
  }
`;

const Lines = styled.div`
  position: fixed;
  height: 72px;
  width: 100%;
  background: linear-gradient(
    rgba(89, 193, 254, 0.2) 20%,
    #59c1fe 40%,
    #59c1fe 60%,
    rgba(89, 193, 254, 0.2) 80%
  );
  background-size: 1px 8px;
  box-shadow: 0 0 16px rgba(89, 193, 254, 0.4);
  transform: translateY(-26px);
  @media (max-width: 520px) {
    transform: translateY(-110px);
    height: 24px;
  }
`;

const Header = styled.h1`
  position: relative;
  top: -58px;
  margin: 0;
  font-family: "Exo";
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
    top: -110px;
    font-size: 60px;
    &:after {
      top: -2px;
      right: -6px;
    }
  }
`;

const FirstSpan = styled.span`
  display: block;
  text-shadow: 0 0 18px #8ba2d0, 0 0 36px black, 0 0 200px #165ff3;
  -webkit-text-stroke: 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) {
    text-shadow: 0 0 9px #8ba2d0, 0 0 18px black, 0 0 100px #165ff3;
    -webkit-text-stroke: 6px rgba(0, 0, 0, 0.5);
  }
`;

const SecondSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(
    #032d50 25%,
    #00a1ef 35%,
    white 50%,
    #20125f 50%,
    #8313e7 55%,
    #ff61af 75%
  );
  -webkit-background-clip: text;
  -webkit-text-stroke: 1.6px #94a0b9;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1000px) {
    -webkit-text-stroke: 1px #94a0b9;
  }
`;

const subheaderKeyframes = keyframes`
  0% {
    text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
  }
  50% {
    text-shadow: 0 0 32px #fe05e1, 0 0 48px #fe05e1;
  }
  100% {
    text-shadow: 0 0 16px #fe05e1, 0 0 18px #fe05e1;
  }
`;

const Subheader = styled.h2`
  position: absolute;
  top: 40%;
  margin: 0;
  z-index: 100;
  color: #ffffff;
  font-family: "Mr Dafoe";
  font-size: 172px;
  animation: ${subheaderKeyframes} 1.5s;
  animation-iteration-count: infinite;
  @media (max-width: 1000px) {
    font-size: 86px;
    top: 45%;
  }
  @media (max-width: 520px) {
    font-size: 72px;
    top: 32%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  top: 70%;
  padding: 15px 25px;
  z-index: 100;
  box-shadow: 0 0 24px 6px #00a1ef;
  background-color: #00a1ef;
  border: 2px solid #ff61af;
  border-radius: 16px;
  color: #8313e7;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2px;
  text-decoration: none;
  transition: color, background-color, box-shadow;
  transition-duration: 500ms;
  &:hover {
    box-shadow: 0 0 48px 12px #fe05e1;
    background-color: #8313e7;
    color: #fe05e1;
  }
  @media (max-width: 1000px) {
    padding: 12px 22px;
    font-size: 16px;
  }
  @media (max-width: 520px) {
    top: 65%;
  }
`;

const IndexPage = () => (
  <Layout hideNav hideFooter>
    <Container>
      <Grid />
      <Lines />
      <Header>
        <FirstSpan>FRONTEND</FirstSpan>
        <SecondSpan>FRONTEND</SecondSpan>
      </Header>
      <Subheader>Showcase</Subheader>
      <StyledLink to="/chambers">ENTER</StyledLink>
    </Container>
  </Layout>
);

export const Head = () => <Seo />;

export default IndexPage;
