import { useInView, defaultFallbackInView } from "react-intersection-observer";
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
  GRIMACE_LIGHTLY,
  PURPLE_HAZE,
  BLUE_GRAY,
  BLUE_GRIMLY,
  GRIMACE,
} from "src/styles/colors";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
  TWO_THOUSAND_MS,
  TWENTY_FIVE_HUNDRED_MS,
  ONE_THOUSAND_MS,
  THREE_THOUSAND_MS,
  ONE_TWENTY_FIVE_MS,
  FOUR_THOUSAND_MS,
  FORTY_FIVE_HUNDRED_MS,
  FIFTY_FIVE_HUNDRED_MS,
} from "src/utils/constants/transition-speeds";
import { PINK_GLOW_KEYFRAMES } from "src/utils/constants/animation-constants";
import {
  WIDE_BLUE_GLOW,
  WIDE_PINK_GLOW,
} from "src/utils/constants/shadow-constants";
import { Z_ONE_HUNDRED } from "src/utils/constants/layer-constants";
import { InViewProps } from "src/utils/types/inView";
import Layout from "src/components/global/Layout/Layout";
import Seo from "src/components/global/Seo/Seo";

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

const Grid = styled.div<InViewProps>`
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
  transform: ${({ inView }) => inView && "rotateX(-100deg)"};
  transition: transform ${TWO_THOUSAND_MS};
`;

const Lines = styled.div<InViewProps>`
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
  transform: ${({ inView }) =>
    inView ? "translateY(-26px)" : "translateY(-1000px)"};
  transition: transform ${TWO_THOUSAND_MS} ${TWO_FIFTY_MS};
`;

const Header = styled.h1<InViewProps>`
  position: relative;
  top: -58px;
  margin: 0;
  font-size: 180px;
  letter-spacing: 4px;
  transform: ${({ inView }) => inView && "skew(-15deg)"};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${FIVE_HUNDRED_MS} ${TWENTY_FIVE_HUNDRED_MS},
    transform ${ONE_THOUSAND_MS} ${THREE_THOUSAND_MS};
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
    opacity: ${({ inView }) => (inView ? "1" : "0")};
    transition: opacity ${ONE_TWENTY_FIVE_MS} ${FOUR_THOUSAND_MS};
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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1.6px ${BLUE_GRAY};
  -webkit-text-fill-color: transparent;
  @media (max-width: 1000px) {
    -webkit-text-stroke: 1px ${BLUE_GRAY};
  }
`;

const Subheader = styled.h2<InViewProps>`
  position: absolute;
  top: 40%;
  margin: 0;
  z-index: ${Z_ONE_HUNDRED};
  font-family: "Mr Dafoe";
  font-size: 172px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${ONE_THOUSAND_MS} ${FORTY_FIVE_HUNDRED_MS};
  animation: ${PINK_GLOW_KEYFRAMES} ${TWO_THOUSAND_MS};
  animation-iteration-count: infinite;
  @media (max-width: 1000px) {
    font-size: 86px;
    top: 45%;
  }
  @media (max-width: 520px) {
    font-size: 72px;
  }
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["inView"].includes(prop),
})<InViewProps>`
  display: block;
  position: absolute;
  top: 70%;
  padding: 15px 25px;
  z-index: ${Z_ONE_HUNDRED};
  box-shadow: ${WIDE_BLUE_GLOW};
  background-color: ${BLUE_EYES};
  border: 2px solid ${PEACHY};
  border-radius: 16px;
  color: ${GRIMACE_LIGHTLY};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2px;
  text-decoration: none;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: color ${FIVE_HUNDRED_MS}, background-color ${FIVE_HUNDRED_MS},
    box-shadow ${FIVE_HUNDRED_MS}, border ${FIVE_HUNDRED_MS},
    opacity ${FIVE_HUNDRED_MS} ${FIFTY_FIVE_HUNDRED_MS};
  &:hover {
    box-shadow: ${WIDE_PINK_GLOW};
    background-color: ${GRIMACE_LIGHTLY};
    border: 2px solid ${BLUE_EYES};
    color: ${BLUE_EYES};
  }
  @media (max-width: 520px) {
    top: 65%;
    padding: 10px 20px;
  }
`;

const FrontendShowcasePage = () => {
  defaultFallbackInView(true);

  const { ref: containerRef, inView: isContainerVisible } = useInView({
    threshold: 0.3,
    delay: 250,
    triggerOnce: true,
  });

  return (
    <Layout hideNav hideFooter>
      <Container ref={containerRef}>
        <Grid inView={isContainerVisible} />
        <Lines inView={isContainerVisible} />
        <Header inView={isContainerVisible}>
          <FirstSpan>FRONTEND</FirstSpan>
          <SecondSpan>FRONTEND</SecondSpan>
        </Header>
        <Subheader inView={isContainerVisible}>Showcase</Subheader>
        <StyledLink to="/showcase/components" inView={isContainerVisible}>
          ENTER
        </StyledLink>
      </Container>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Frontend Showcase"
    description="A showcase of frontend React components built in Gatsby"
    pathname="/showcase"
  />
);

export default FrontendShowcasePage;
