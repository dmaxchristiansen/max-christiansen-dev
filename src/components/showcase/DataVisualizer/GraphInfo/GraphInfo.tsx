import styled from "styled-components";
import { ActiveProps, GraphProps } from "../types/dataVisualizer";
import { BLUE_EYES } from "src/utils/constants/colors";
import { OPACITY_KEYFRAMES } from "src/utils/constants/animations";
import { ONE_THOUSAND_MS, TWO_FIFTY_MS } from "src/utils/constants/transitions";

interface GraphInfoProps {
  graphData: GraphProps;
}

const DataRow = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: 991px) {
    margin: 0;
  }
  @media (max-width: 520px) {
    flex-direction: column-reverse;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
  @media (max-width: 520px) {
    flex-direction: row;
    width: 100%;
    font-size: 16px;
  }
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

const SampleWrapper = styled.div`
  @media (max-width: 520px) {
    margin-left: 20px;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  @media (max-width: 520px) {
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 8px;
  }
`;

const DataHeader = styled.h3`
  margin: 0;
  opacity: 0;
  color: ${BLUE_EYES};
  text-align: center;
  font-size: 40px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 2px;
  animation-duration: ${ONE_THOUSAND_MS};
  animation-fill-mode: forwards;
  animation-delay: ${TWO_FIFTY_MS};
  animation-name: ${OPACITY_KEYFRAMES};
  @media (max-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 520px) {
    text-align: left;
    font-size: 20px;
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
            <SampleWrapper>
              <BoldBlueSpan>Sample size:&nbsp;</BoldBlueSpan>
              <BoldSpan>{graphData.sampleSize}</BoldSpan>
            </SampleWrapper>
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
