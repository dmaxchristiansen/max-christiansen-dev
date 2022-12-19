import { useState } from "react";
import styled from "styled-components";
import { DataVisualizerProps } from "./types/dataVisualizer";
import { BLUE_GRIMLY } from "src/styles/colors";
import { DARK_SHADOW } from "src/utils/constants/shadow-constants";
import Title from "./Title";
import GraphInfo from "./GraphInfo";
import Graph from "./Graph";
import NavButton from "./NavButton";

interface MarginProps {
  margin: string;
}

const SectionWrapper = styled.div<MarginProps>`
  width: 100%;
  margin: ${({ margin }) => margin};
  padding: 0 30px;
`;

const SectionContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 30px 60px;
  background-color: ${BLUE_GRIMLY};
  border-radius: 6px;
  box-shadow: ${DARK_SHADOW};
`;

const NavRow = styled.div`
  display: flex;
  margin: 0 50px;
  justify-content: space-between;
`;

const DataVisualizer: React.FC<DataVisualizerProps & MarginProps> = ({
  data,
  margin,
}) => {
  const { graphData } = data;

  const [active, setActive] = useState("manufacturing");

  return (
    <SectionWrapper margin={margin}>
      <SectionContainer>
        <Title>{data.graphTitle}</Title>
        {graphData.map(data => (
          <GraphInfo key={data.id} graphData={data} active={active} />
        ))}
        {graphData.map(data => (
          <Graph key={data.id} graphData={data} active={active} />
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
