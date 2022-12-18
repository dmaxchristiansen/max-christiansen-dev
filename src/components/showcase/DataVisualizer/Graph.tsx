import styled, { Keyframes, keyframes } from "styled-components";
import {
  BAR_ANIMATION_START_HEIGHT,
  BAR_ANIMATION_DURATION,
  BAR_ANIMATION_DELAY,
  METRIC_ANIMATION_DELAY,
  METRIC_KEYFRAMES,
  BAR_BACKGROUND_DARK_BLUE,
  BAR_BACKGROUND_LIGHT_BLUE,
  BAR_BACKGROUND_PINK,
} from "./utils/constants";
import { CLEAR, WHITE } from "src/styles/colors";

interface GraphProps {
  activeGraph: string;
  graphData: {
    id: string;
    label: string;
    clients: string;
    members: string;
    pain: string;
    depression: string;
    anxiety: string;
    surgery: string;
  };
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

const BarKeyframes = keyframes`
  0% { 
    height: 45px; 
  }
  100% { 
    height: 80%; 
  }
`;

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
  animation-name: ${BarKeyframes};
`;

const Metric = styled.div`
  position: absolute;
  top: 20px;
  color: ${WHITE};
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
  background-color: #432448;
`;

const ArrowPoint = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid ${CLEAR};
  border-right: 20px solid ${CLEAR};
  border-top: 18px solid #432448;
`;

const Graph: React.FC<GraphProps> = ({ activeGraph, graphData }) => {
  const painBarKeyframes = keyframes`
    from { height: ${BAR_ANIMATION_START_HEIGHT}; }
    to { height: ${graphData.pain}; }
  `;

  const barsConfig = [
    {
      id: "pain",
      metric: graphData.pain,
      copy: "Pain reduction per participant",
      backgroundColor: BAR_BACKGROUND_DARK_BLUE,
      barKeyframes: painBarKeyframes,
    },
    {
      id: "depression",
      metric: graphData.depression,
      copy: "Depression reduction",
      backgroundColor: BAR_BACKGROUND_PINK,
      barKeyframes: painBarKeyframes,
    },
    {
      id: "anxiety",
      metric: graphData.anxiety,
      copy: "Anxiety reduction",
      backgroundColor: BAR_BACKGROUND_LIGHT_BLUE,
      barKeyframes: painBarKeyframes,
    },
    {
      id: "surgery",
      metric: graphData.surgery,
      copy: "Surgeries avoided",
      backgroundColor: BAR_BACKGROUND_DARK_BLUE,
      barKeyframes: painBarKeyframes,
    },
  ];

  return (
    <>
      {activeGraph === graphData.id && (
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
