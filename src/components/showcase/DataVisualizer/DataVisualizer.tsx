import { useState } from "react";
import styled from "styled-components";
import { dataConfig } from "./utils/dataConfig";
import Header from "./Header";
import Graph from "./Graph";
import NavButton from "./NavButton";

const SectionWrapper = styled.div`
  width: 100%;
  padding: 60px 30px 0px;
`;

const SectionContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 60px 90px;
  background-color: #432448;
  border-radius: 6px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
`;

const NavRow = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

const DataVisualizer = () => {
  const [activeGraph, setActiveGraph] = useState("manufacturing");

  return (
    <SectionWrapper>
      <SectionContainer>
        {dataConfig.map(data => (
          <Header
            key={data.id}
            headerCopy={activeGraph === data.id ? data.label : ""}
            clients={activeGraph === data.id ? data.clients : ""}
            members={activeGraph === data.id ? data.members : ""}
          />
        ))}
        {dataConfig.map(data => (
          <Graph key={data.id} graphData={data} activeGraph={activeGraph} />
        ))}

        <NavRow>
          {dataConfig.map(data => (
            <NavButton
              key={data.id}
              buttonId={data.id}
              buttonLabel={data.label}
              activeButton={activeGraph}
              setActiveButton={setActiveGraph}
            />
          ))}
        </NavRow>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default DataVisualizer;
