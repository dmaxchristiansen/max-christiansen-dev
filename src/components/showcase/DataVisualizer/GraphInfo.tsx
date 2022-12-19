import styled from "styled-components";
import { ActiveProps, GraphProps } from "./types/dataVisualizer";
import { BLUE_EYES } from "src/styles/colors";

interface GraphInfoProps {
  graphData: GraphProps;
}

const DataHeader = styled.h3`
  margin: 0;
  color: ${BLUE_EYES};
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  line-height: 40px;
  letter-spacing: 2px;
`;

const DataRow = styled.div`
  display: flex;
  margin: 0 50px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
`;

const OrangePinkSpan = styled.span`
  color: ${BLUE_EYES};
`;

const BoldSpan = styled.span`
  font-weight: 700;
`;

const GraphInfo: React.FC<GraphInfoProps & ActiveProps> = ({
  active,
  graphData,
}) => (
  <>
    {active === graphData.id && (
      <>
        <DataRow>
          <LeftCol>
            <div>
              <OrangePinkSpan>Data sets:&nbsp;</OrangePinkSpan>
              <BoldSpan>{graphData.dataGroups}</BoldSpan>
            </div>
            <div>
              <OrangePinkSpan>Sample size:&nbsp;</OrangePinkSpan>
              <BoldSpan>{graphData.sampleSize}</BoldSpan>
            </div>
          </LeftCol>
          <RightCol>
            <DataHeader>{graphData.label}</DataHeader>
          </RightCol>
        </DataRow>
      </>
    )}
  </>
);

export default GraphInfo;
