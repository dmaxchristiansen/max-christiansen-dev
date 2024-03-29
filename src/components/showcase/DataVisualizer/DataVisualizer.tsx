import { useState } from "react";
import styled from "styled-components";
import {
  DataVisualizerProps,
  BackgroundColorProps,
} from "./types/dataVisualizer";
import { DARK_SHADOW } from "src/utils/constants/shadows";
import Title from "./Title/Title";
import GraphInfo from "./GraphInfo/GraphInfo";
import Graph from "./Graph/Graph";
import NavButton from "./NavButton/NavButton";
import { STANDARD_X_PADDING } from "src/utils/constants/layouts";

interface MarginProps {
  margin: string;
}

const SectionWrapper = styled.div<MarginProps>`
  width: 100%;
  margin: ${({ margin }) => margin};
  padding: ${STANDARD_X_PADDING};
  @media (max-width: 520px) {
    padding: 0;
  }
`;

const SectionContainer = styled.div<BackgroundColorProps>`
  max-width: 1020px;
  margin: 0 auto;
  padding: 30px 60px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  box-shadow: ${DARK_SHADOW};
  @media (max-width: 991px) {
    padding: 30px;
  }
  @media (max-width: 520px) {
    padding: 20px 20px 14px;
    border-radius: 0;
  }
`;

const NavRow = styled.div`
  display: flex;
  margin: 20px 50px 0;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin: 20px 10px 0;
  }
  @media (max-width: 768px) {
    margin: 20px 0 0;
  }
  @media (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 12px 0 0;
  }
`;

const DataVisualizer: React.FC<DataVisualizerProps & MarginProps> = ({
  data,
  margin,
}) => {
  const {
    graphTitle,
    graphBackgroundColor,
    barBackgroundColors,
    barLabels,
    graphData,
  } = data;

  const firstGraphId: string = graphData[0].id;

  const [active, setActive] = useState(firstGraphId);

  return (
    <SectionWrapper margin={margin}>
      <SectionContainer backgroundColor={graphBackgroundColor}>
        <Title>{graphTitle}</Title>
        {graphData.map(data => (
          <GraphInfo key={data.id} graphData={data} active={active} />
        ))}
        {graphData.map(data => (
          <Graph
            key={data.id}
            graphData={data}
            active={active}
            arrowColor={graphBackgroundColor}
            barBackgroundColors={barBackgroundColors}
            barLabels={barLabels}
          />
        ))}
        <NavRow>
          {graphData.map(data => (
            <NavButton
              key={data.id}
              buttonId={data.id}
              buttonLabel={data.label}
              active={active}
              setActiveButton={setActive}
            />
          ))}
        </NavRow>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default DataVisualizer;
