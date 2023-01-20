import { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  MarqueeProps,
  ContainerProps,
  AnimatedWrapperProps,
} from "./types/marqueeTypes";
import {
  IMAGE_MAX_WIDTH,
  IMAGE_WRAPPER_PADDING_X,
  IMAGE_BLOCK_PIXEL_TRANSLATE_X_PER_SECOND,
  FORWARD_KEYFRAMES,
  BACKWARD_KEYFRAMES,
} from "./utils/constants";

const Container = styled.div<ContainerProps>`
  display: block;
  margin: 0 auto;
  padding: ${({ pt, pb }) => `${pt} 0 ${pb}`};
`;

const ExternalWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const AnimatedWrapper = styled.div<AnimatedWrapperProps>`
  display: flex;
  animation-name: ${({ backwardScroll }) =>
    backwardScroll ? BACKWARD_KEYFRAMES : FORWARD_KEYFRAMES};
  animation-duration: ${({ animationSpeed }) => `${animationSpeed}s`};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const ImageBlock = styled.div`
  display: inline-block;
`;

const FlexRow = styled.div`
  display: flex;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${IMAGE_WRAPPER_PADDING_X / 2}px 0;
`;

const Image = styled.img`
  max-width: 128px;
`;

const Marquee: React.FC<MarqueeProps> = ({
  pt,
  pb,
  backwardScroll = false,
  images,
}) => {
  // Derive total width of one ImageBlock
  const imageBlockWidth = images.reduce(
    (totalWidth, image) =>
      // Sum widths of all ImageWrappers in one ImageBlock
      (totalWidth +=
        // Account for Image max-width and ImageWrapper padding
        (image.width <= IMAGE_MAX_WIDTH ? image.width : IMAGE_MAX_WIDTH) +
        IMAGE_WRAPPER_PADDING_X),
    0,
  );

  // Set animation duration based on magic number divisor
  const animationSpeed =
    imageBlockWidth / IMAGE_BLOCK_PIXEL_TRANSLATE_X_PER_SECOND;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container pt={pt} pb={pb}>
      <ExternalWrapper>
        <AnimatedWrapper
          backwardScroll={backwardScroll}
          animationSpeed={animationSpeed}
        >
          <ImageBlock>
            <FlexRow>
              {images.map(image => (
                <ImageWrapper key={uuidv4()}>
                  <Image src={image.url} alt={image.altText} />
                </ImageWrapper>
              ))}
            </FlexRow>
          </ImageBlock>
          <ImageBlock>
            <FlexRow>
              {images.map(image => (
                <ImageWrapper key={uuidv4()}>
                  <Image src={image.url} alt={image.altText} />
                </ImageWrapper>
              ))}
            </FlexRow>
          </ImageBlock>
        </AnimatedWrapper>
      </ExternalWrapper>
    </Container>
  );
};

export default Marquee;
