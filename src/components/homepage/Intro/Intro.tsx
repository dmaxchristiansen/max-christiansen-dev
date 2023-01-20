import { useState, useEffect, useContext } from "react";
import { InViewProps } from "src/utils/types/inView";
import styled, { css } from "styled-components";
import { WIDE_BLUE_GLOW } from "src/utils/constants/shadows";
import {
  FIVE_HUNDRED_MS,
  TWO_FIFTY_MS,
  ONE_THOUSAND_MS,
  TWO_THOUSAND_MS,
  THREE_THOUSAND_MS,
  FOUR_THOUSAND_MS,
  THIRTY_FIVE_HUNDRED_MS,
  TWENTY_FIVE_HUNDRED_MS,
} from "src/utils/constants/transitions";
import {
  ComponentViewContext,
  INTRO_TIMEOUT,
} from "src/utils/providers/ComponentViewContextProvider";
import ProfileImage from "src/components/homepage/Intro/ProfileImage/ProfileImage";
import ChevronScrollButton from "src/components/homepage/ChevronScrollButton/ChevronScrollButton";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 30px 0;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 75px);
  padding-top: 40px;
  text-align: center;
  letter-spacing: 4px;
  @media (max-width: 520px) {
    padding-top: 0;
  }
`;

const Header = styled.h1<InViewProps>`
  margin: 0 0 10px;
  font-size: 80px;
  line-height: 1;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_FIFTY_MS};
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 520px) {
    margin-bottom: 10px;
    font-size: 44px;
  }
`;

const Subheader = styled.h2<InViewProps>`
  margin: 0;
  font-size: 40px;
  line-height: 1;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${ONE_THOUSAND_MS};
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 520px) {
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

const SharedProfileImageContainerStyles = css`
  display: flex;
  margin: 0 auto;
  border-radius: 16px;
  transition: opacity, box-shadow;
  transition-duration: ${FIVE_HUNDRED_MS};
`;

const MobileProfileImageContainer = styled.div<InViewProps>`
  max-width: 170px;
  ${SharedProfileImageContainerStyles}
  box-shadow: ${({ inView }) => (inView ? WIDE_BLUE_GLOW : "none")};
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition-delay: ${TWO_THOUSAND_MS}, ${TWENTY_FIVE_HUNDRED_MS};
  @media (min-width: 521px) {
    display: none;
  }
`;

const Devotion = styled.p<InViewProps>`
  margin: 40px 0 60px;
  font-size: 24px;
  letter-spacing: 2px;
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transform: ${({ inView }) =>
    inView ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)"};
  transition: opacity, transform;
  transition-duration: ${FIVE_HUNDRED_MS};
  transition-delay: ${TWO_THOUSAND_MS};
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 520px) {
    margin: 30px 0 0px;
    font-size: 18px;
    transition-duration: ${FIVE_HUNDRED_MS};
    transition-delay: ${THREE_THOUSAND_MS};
  }
`;

const DesktopProfileImageContainer = styled.div<InViewProps>`
  max-width: 350px;
  ${SharedProfileImageContainerStyles}
  opacity: ${({ inView }) => (inView ? "1" : "0")};
  box-shadow: ${({ inView }) => (inView ? WIDE_BLUE_GLOW : "none")};
  transition-delay: ${THREE_THOUSAND_MS}, ${THIRTY_FIVE_HUNDRED_MS};
  @media (max-width: 520px) {
    display: none;
  }
`;

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);
  const componentViewContext = useContext(ComponentViewContext);
  const { setHasIntroBeenViewed, hasIntroBeenViewed } = componentViewContext;

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setHasIntroBeenViewed(true);
    }, INTRO_TIMEOUT);
  }, [setIsMounted, setHasIntroBeenViewed]);

  return (
    <Container>
      <Wrapper>
        <Header inView={isMounted || hasIntroBeenViewed}>
          Max Christiansen
        </Header>
        <Subheader inView={isMounted || hasIntroBeenViewed}>
          Software Engineer
        </Subheader>
        <MobileProfileImageContainer inView={isMounted || hasIntroBeenViewed}>
          <ProfileImage />
        </MobileProfileImageContainer>
        <Devotion inView={isMounted || hasIntroBeenViewed}>
          devoted to creating beautifully simple, modern web experiences
        </Devotion>
        <DesktopProfileImageContainer inView={isMounted || hasIntroBeenViewed}>
          <ProfileImage />
        </DesktopProfileImageContainer>
        <ChevronScrollButton
          targetElementId="expertise"
          targetElementOffsetTopValue={0}
          transitionDelay={FOUR_THOUSAND_MS}
          inView={isMounted || hasIntroBeenViewed}
        />
      </Wrapper>
    </Container>
  );
};

export default Intro;
