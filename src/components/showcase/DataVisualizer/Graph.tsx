import styled, { Keyframes, keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { BAR_ANIMATION_START_HEIGHT } from "./utils/constants";
import { TWO_FIFTY_MS, ONE_THOUSAND_MS } from "src/utils/constants/transitions";
import { CLEAR, WHITE, OBSIDIAN } from "src/styles/colors";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animations";
import { ActiveProps, GraphProps } from "./types/dataVisualizer";

interface ArrowProps {
  arrowColor: string;
}

interface GraphComponentProps extends ArrowProps {
  graphData: GraphProps;
  barBackgroundColors: string[];
  barLabels: string[];
}

const GraphContainer = styled.div`
  margin: 40px 40px 0;
  border-top: 4px solid ${WHITE};
  @media (max-width: 991px) {
    margin: 30px 0 0;
  }
  @media (max-width: 520px) {
    margin: 15px 0 0;
  }
`;

const BarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: 520px) {
    padding: 0;
  }
`;

const Bar = styled.div`
  position: relative;
  width: 150px;
  height: 360px;
  @media (max-width: 991px) {
    width: 134px;
    height: 360px;
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 300px;
  }
  @media (max-width: 520px) {
    width: 75px;
    height: 250px;
  }
`;

interface BarFillProps {
  barBackgroundColor: string;
  barKeyframes: Keyframes;
}

const BarFill = styled.div<BarFillProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding-bottom: 5px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({ barBackgroundColor }) => barBackgroundColor};
  animation-fill-mode: forwards;
  animation-delay: ${TWO_FIFTY_MS};
  animation-duration: ${ONE_THOUSAND_MS};
  animation-name: ${({ barKeyframes }) => barKeyframes};
  @media (max-width: 991px) {
    width: 134px;
  }
  @media (max-width: 768px) {
    width: 90px;
  }
  @media (max-width: 520px) {
    width: 75px;
  }
`;

const Metric = styled.div`
  position: absolute;
  top: 20px;
  color: ${OBSIDIAN};
  text-align: center;
  opacity: 0;
  animation-duration: ${ONE_THOUSAND_MS};
  animation-fill-mode: forwards;
  animation-delay: ${ONE_THOUSAND_MS};
  animation-name: ${OPACITY_KEYFRAMES};
  @media (max-width: 520px) {
    top: 16px;
  }
`;

const MetricTypography = styled.div`
  position: relative;
  font-size: 40px;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MetricLabel = styled.div`
  max-width: 130px;
  margin-top: 5px;
  font-size: 20px;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;

const ArrowWrapper = styled.div`
  margin-top: auto;
`;

const ArrowBase = styled.div<ArrowProps>`
  height: 22px;
  width: 18px;
  margin: 0px auto;
  background-color: ${({ arrowColor }) => arrowColor};
  @media (max-width: 520px) {
    height: 16px;
    width: 12px;
  }
`;

const ArrowPoint = styled.div<ArrowProps>`
  width: 0px;
  height: 0px;
  border-left: 20px solid ${CLEAR};
  border-right: 20px solid ${CLEAR};
  border-top: 18px solid ${({ arrowColor }) => arrowColor};
  @media (max-width: 520px) {
    border-left: 14px solid ${CLEAR};
    border-right: 14px solid ${CLEAR};
    border-top: 12px solid ${({ arrowColor }) => arrowColor};
  }
`;

const Graph: React.FC<GraphComponentProps & ActiveProps> = ({
  active,
  graphData,
  arrowColor,
  barBackgroundColors,
  barLabels,
}) => {
  const barsConfig = graphData.barMetrics.map((object, i) => ({
    ...object,
    backgroundColor: barBackgroundColors[i],
    label: barLabels[i],
    barKeyframes: keyframes`
      0% {
        height: ${BAR_ANIMATION_START_HEIGHT};
      }
      100% {
        height: ${graphData.barMetrics[i].metric};
      }
    `,
  }));

  return (
    <>
      {active === graphData.id && (
        <GraphContainer>
          <BarsContainer>
            {barsConfig.map(bar => (
              <Bar key={uuidv4()}>
                <BarFill
                  barBackgroundColor={bar.backgroundColor}
                  barKeyframes={bar.barKeyframes}
                >
                  <Metric>
                    <MetricTypography>-{bar.metric}</MetricTypography>
                    <MetricLabel>{bar.label}</MetricLabel>
                  </Metric>
                  <ArrowWrapper>
                    <ArrowBase arrowColor={arrowColor} />
                    <ArrowPoint arrowColor={arrowColor} />
                  </ArrowWrapper>
                </BarFill>
              </Bar>
            ))}
          </BarsContainer>
        </GraphContainer>
      )}
    </>
  );
};

export default Graph;
