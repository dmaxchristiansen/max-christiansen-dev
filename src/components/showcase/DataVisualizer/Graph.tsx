import styled, { Keyframes, keyframes } from "styled-components";
import {
  BAR_ANIMATION_START_HEIGHT,
  BAR_ANIMATION_DURATION,
  BAR_ANIMATION_DELAY,
  METRIC_ANIMATION_DELAY,
  METRIC_KEYFRAMES,
} from "./utils/constants";
import {
  BLUE_SKY,
  CLEAR,
  PURPLE_PASTEL,
  ROYAL_BLUE,
  WHITE,
  SEABED,
  OBSIDIAN,
  GRIMACE,
} from "src/styles/colors";
import { ActiveProps, GraphProps } from "./types/dataVisualizer";

interface GraphComponentProps {
  graphData: GraphProps;
}

const GraphContainer = styled.div`
  margin: 80px 40px 0;
  border-top: 4px solid ${WHITE};
`;

const BarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Bar = styled.div`
  position: relative;
  width: 150px;
  height: 360px;
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
  animation-delay: ${BAR_ANIMATION_DELAY};
  animation-duration: ${BAR_ANIMATION_DURATION};
  animation-name: ${({ barKeyframes }) => barKeyframes};
`;

const Metric = styled.div`
  position: absolute;
  top: 20px;
  color: ${OBSIDIAN};
  text-align: center;
  opacity: 0;
  animation-duration: ${BAR_ANIMATION_DURATION};
  animation-fill-mode: forwards;
  animation-delay: ${METRIC_ANIMATION_DELAY};
  animation-name: ${METRIC_KEYFRAMES};
`;

const MetricTypography = styled.div`
  position: relative;
  font-size: 40px;
  line-height: 40px;
`;

const MetricCopy = styled.div`
  max-width: 130px;
  font-size: 19px;
  line-height: 21px;
`;

const ArrowWrapper = styled.div`
  margin-top: auto;
`;

const ArrowBase = styled.div`
  width: 18px;
  height: 22px;
  margin: 0px auto;
  background-color: ${GRIMACE};
`;

const ArrowPoint = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid ${CLEAR};
  border-right: 20px solid ${CLEAR};
  border-top: 18px solid ${GRIMACE};
`;

const Graph: React.FC<GraphComponentProps & ActiveProps> = ({
  active,
  graphData,
}) => {
  const barOneKeyframes = keyframes`
    0% {
      height: ${BAR_ANIMATION_START_HEIGHT};
    }
    100% {
      height: ${graphData.barOne};
    }
  `;
  const barTwoKeyframes = keyframes`
    0% {
      height: ${BAR_ANIMATION_START_HEIGHT};
    }
    100% {
      height: ${graphData.barTwo};
    }
  `;
  const barThreeKeyframes = keyframes`
    0% {
      height: ${BAR_ANIMATION_START_HEIGHT};
    }
    100% {
      height: ${graphData.barThree};
    }
  `;
  const barFourKeyframes = keyframes`
    0% {
      height: ${BAR_ANIMATION_START_HEIGHT};
    }
    100% {
      height: ${graphData.barFour};
    }
  `;

  const barsConfig = [
    {
      id: "barOne",
      metric: graphData.barOne,
      copy: "placeholder",
      backgroundColor: SEABED,
      barKeyframes: barOneKeyframes,
    },
    {
      id: "barTwo",
      metric: graphData.barTwo,
      copy: "placeholder",
      backgroundColor: BLUE_SKY,
      barKeyframes: barTwoKeyframes,
    },
    {
      id: "barThree",
      metric: graphData.barThree,
      copy: "placeholder",
      backgroundColor: ROYAL_BLUE,
      barKeyframes: barThreeKeyframes,
    },
    {
      id: "barFour",
      metric: graphData.barFour,
      copy: "placeholder",
      backgroundColor: PURPLE_PASTEL,
      barKeyframes: barFourKeyframes,
    },
  ];

  return (
    <>
      {active === graphData.id && (
        <GraphContainer>
          <BarsContainer>
            {barsConfig.map(bar => (
              <div key={bar.id}>
                <Bar>
                  <BarFill
                    barBackgroundColor={bar.backgroundColor}
                    barKeyframes={bar.barKeyframes}
                  >
                    <Metric>
                      <MetricTypography>-{bar.metric}</MetricTypography>
                      <MetricCopy>{bar.copy}</MetricCopy>
                    </Metric>
                    <ArrowWrapper>
                      <ArrowBase />
                      <ArrowPoint />
                    </ArrowWrapper>
                  </BarFill>
                </Bar>
              </div>
            ))}
          </BarsContainer>
        </GraphContainer>
      )}
    </>
  );
};

export default Graph;