import { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  FUTURE_BLUE,
  PURPLE_PASTEL,
  CANDY_BLUE,
  MAVEN_BLUE,
  BLUE_DREAM,
  BLUE_EYES,
  WHITE,
  PEACHY,
  GRIMACE_LIGHTLY,
  PURPLE_HAZE,
  BLUE_GRAY,
  BLUE_GRIMLY,
  GRIMACE,
  HOT_PINK,
} from "src/utils/constants/colors";
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
} from "src/utils/constants/transitions";
import { WIDE_BLUE_GLOW, WIDE_PINK_GLOW } from "src/utils/constants/shadows";
import { InViewProps } from "src/utils/types/inView";
import {
  ComponentViewContext,
  SHOWCASE_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
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
  pointer-events: none;
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
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) => inView && "rotateX(-100deg)"};
  transition: opacity ${FIVE_HUNDRED_MS}, transform ${TWO_THOUSAND_MS};
  pointer-events: none;
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
  pointer-events: none;
`;

const Header = styled.h1<InViewProps>`
  position: fixed;
  top: calc(50% - 147px);
  margin: 0;
  font-size: 180px;
  letter-spacing: 4px;
  line-height: 1;
  transform: ${({ inView }) => inView && "skew(-15deg)"};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${FIVE_HUNDRED_MS} ${TWENTY_FIVE_HUNDRED_MS},
    transform ${ONE_THOUSAND_MS} ${THREE_THOUSAND_MS};
  &:after {
    content: "";
    position: absolute;
    top: -14px;
    right: -4px;
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
    top: calc(50% - 112px);
    font-size: 140px;
    &:after {
      right: -8px;
      height: 64px;
      width: 64px;
    }
  }
  @media (max-width: 800px) {
    top: calc(50% - 82px);
    font-size: 104px;
    &:after {
      top: -12px;
      height: 52px;
      width: 52px;
    }
  }
  @media (max-width: 600px) {
    top: calc(50% - 52px);
    font-size: 68px;
    &:after {
      top: -9px;
      right: -6px;
      height: 38px;
      width: 38px;
    }
  }
  @media (max-width: 400px) {
    top: calc(50% - 46px);
    font-size: 63px;
    &:after {
      top: -12px;
      right: -7px;
    }
  }
`;

const FirstSpan = styled.span`
  display: block;
  -webkit-text-stroke: 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) {
    -webkit-text-stroke: 10px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 800px) {
    -webkit-text-stroke: 8px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 600px) {
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
  @media (max-width: 800px) {
    -webkit-text-stroke: 1.4px ${BLUE_GRAY};
  }
`;

const Subheader = styled.h2<InViewProps>`
  position: fixed;
  top: calc(50% - 50px);
  width: 100%;
  margin: 0;
  text-align: center;
  font-family: "Mr Dafoe";
  font-size: 172px;
  line-height: 1;
  text-shadow: 0 0 16px ${HOT_PINK}, 0 0 18px ${HOT_PINK};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${ONE_THOUSAND_MS} ${FORTY_FIVE_HUNDRED_MS};
  @media (max-width: 1000px) {
    top: calc(50% - 30px);
    font-size: 132px;
  }
  @media (max-width: 800px) {
    top: calc(50% - 20px);
    font-size: 100px;
  }
  @media (max-width: 600px) {
    top: calc(50% - 14px);
    font-size: 70px;
  }
  @media (max-width: 400px) {
    top: calc(50% - 12px);
    font-size: 60px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: calc(50% + 180px);
  width: 100%;
  @media (max-width: 600px) {
    top: calc(50% + 110px);
  }
  @media (max-width: 400px) {
    top: calc(50% + 80px);
  }
`;

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: prop => !["inView"].includes(prop),
})<InViewProps>`
  padding: 15px 25px;
  box-shadow: ${WIDE_BLUE_GLOW};
  background-color: ${BLUE_EYES};
  border: 4px solid ${GRIMACE_LIGHTLY};
  border-radius: 16px;
  color: ${GRIMACE_LIGHTLY};
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 2px;
  text-decoration: none;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: color ${FIVE_HUNDRED_MS}, background-color ${FIVE_HUNDRED_MS},
    box-shadow ${FIVE_HUNDRED_MS}, border ${FIVE_HUNDRED_MS},
    opacity ${FIVE_HUNDRED_MS} ${FIFTY_FIVE_HUNDRED_MS};
  &:hover {
    box-shadow: ${WIDE_PINK_GLOW};
    background-color: ${GRIMACE_LIGHTLY};
    border: 4px solid ${BLUE_EYES};
    color: ${BLUE_EYES};
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 20px;
  }
`;

const ReplayButtonWrapper = styled.div<InViewProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: calc(100% - 24px);
  width: 100%;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity ${FIVE_HUNDRED_MS};
`;

const ReplayButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
`;

const FrontendShowcasePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const componentViewContext = useContext(ComponentViewContext);
  const { setHasShowcaseBeenViewed, hasShowcaseBeenViewed } =
    componentViewContext;

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setHasShowcaseBeenViewed(true);
    }, SHOWCASE_TIMEOUT);
  }, [setIsMounted, setHasShowcaseBeenViewed]);

  return (
    <Layout hideNav hideFooter>
      <Container>
        <Grid inView={isMounted || hasShowcaseBeenViewed} />
        <Lines inView={isMounted || hasShowcaseBeenViewed} />
        <Header inView={isMounted || hasShowcaseBeenViewed}>
          <FirstSpan>FRONTEND</FirstSpan>
          <SecondSpan>FRONTEND</SecondSpan>
        </Header>
        <Subheader inView={isMounted || hasShowcaseBeenViewed}>
          Showcase
        </Subheader>
      </Container>
      <LinkWrapper>
        <StyledLink
          to="/showcase/components"
          inView={isMounted || hasShowcaseBeenViewed}
        >
          ENTER
        </StyledLink>
      </LinkWrapper>
      <ReplayButtonWrapper inView={hasShowcaseBeenViewed}>
        <ReplayButton
          type="button"
          aria-label="replay animation"
          onClick={() => window.location.reload()}
        >
          replay animation
        </ReplayButton>
      </ReplayButtonWrapper>
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
