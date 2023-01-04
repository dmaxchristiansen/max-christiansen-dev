import styled, { Keyframes, keyframes } from "styled-components";
import { BAR_ANIMATION_START_HEIGHT } from "./utils/constants";
import {
  TWO_FIFTY_MS,
  ONE_THOUSAND_MS,
} from "src/utils/constants/transition-speeds";
import {
  BLUE_SKY,
  CLEAR,
  PURPLE_PASTEL,
  ROYAL_BLUE,
  WHITE,
  SEABED,
  OBSIDIAN,
} from "src/styles/colors";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animation-constants";
import { ActiveProps, GraphProps } from "./types/dataVisualizer";

interface ArrowProps {
  arrowColor: string;
}

interface GraphComponentProps extends ArrowProps {
  graphData: GraphProps;
}

const GraphContainer = styled.div`
  margin: 40px 40px 0;
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
  animation-delay: ${TWO_FIFTY_MS};
  animation-duration: ${ONE_THOUSAND_MS};
  animation-name: ${({ barKeyframes }) => barKeyframes};
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

const ArrowBase = styled.div<ArrowProps>`
  width: 18px;
  height: 22px;
  margin: 0px auto;
  background-color: ${({ arrowColor }) => arrowColor};
`;

const ArrowPoint = styled.div<ArrowProps>`
  width: 0px;
  height: 0px;
  border-left: 20px solid ${CLEAR};
  border-right: 20px solid ${CLEAR};
  border-top: 18px solid ${({ arrowColor }) => arrowColor};
`;

const Graph: React.FC<GraphComponentProps & ActiveProps> = ({
  active,
  graphData,
  arrowColor,
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
                      <ArrowBase arrowColor={arrowColor} />
                      <ArrowPoint arrowColor={arrowColor} />
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
