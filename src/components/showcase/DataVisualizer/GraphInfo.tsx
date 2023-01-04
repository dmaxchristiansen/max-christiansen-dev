import styled from "styled-components";
import { ActiveProps, GraphProps } from "./types/dataVisualizer";
import { BLUE_EYES } from "src/styles/colors";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animation-constants";
import {
  ONE_THOUSAND_MS,
  TWO_FIFTY_MS,
} from "src/utils/constants/transition-speeds";

interface GraphInfoProps {
  graphData: GraphProps;
}

const DataRow = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: 991px) {
    margin: 0;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
`;

const BoldBlueSpan = styled.span`
  color: ${BLUE_EYES};
  font-weight: 700;
`;

const BoldSpan = styled.span`
  opacity: 0;
  font-weight: 700;
  animation-duration: ${ONE_THOUSAND_MS};
  animation-fill-mode: forwards;
  animation-delay: ${TWO_FIFTY_MS};
  animation-name: ${OPACITY_KEYFRAMES};
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
`;

const DataHeader = styled.h3`
  margin: 0;
  opacity: 0;
  color: ${BLUE_EYES};
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  line-height: 40px;
  letter-spacing: 2px;
  animation-duration: ${ONE_THOUSAND_MS};
  animation-fill-mode: forwards;
  animation-delay: ${TWO_FIFTY_MS};
  animation-name: ${OPACITY_KEYFRAMES};
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 30px;
  }
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
              <BoldBlueSpan>Data sets:&nbsp;</BoldBlueSpan>
              <BoldSpan>{graphData.dataSets}</BoldSpan>
            </div>
            <div>
              <BoldBlueSpan>Sample size:&nbsp;</BoldBlueSpan>
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
