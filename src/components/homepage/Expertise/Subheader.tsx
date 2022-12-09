import styled from "styled-components";

interface SubheaderProps {
  topLineText: string;
  bottomLineText: string;
}

interface BackgroundProps {
  backgroundColor: string;
}

const Heading = styled.h2`
  margin: 0 0 0 20px;
  z-index: 0;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.2;
  @media (max-width: 991px) {
    font-size: 38px;
  }
  @media (max-width: 520px) {
    font-size: 28px;
  }
`;

const Span = styled.span<BackgroundProps>`
  position: relative;
  &:before {
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 14%;
    z-index: -1;
    height: 8px;
    width: 104%;
    left: -1%;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;

const Subheader: React.FC<SubheaderProps & BackgroundProps> = ({
  topLineText,
  bottomLineText,
  backgroundColor,
}) => (
  <Heading>
    <Span backgroundColor={backgroundColor}>{topLineText}</Span>
    <br />
    {bottomLineText}
  </Heading>
);

export default Subheader;
