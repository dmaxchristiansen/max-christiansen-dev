export interface GraphProps {
  id: string;
  label: string;
  dataGroups: string;
  sampleSize: string;
  barOne: string;
  barTwo: string;
  barThree: string;
  barFour: string;
}

export interface DataVisualizerProps {
  data: {
    graphTitle: string;
    graphData: GraphProps[];
  };
}

export interface ActiveProps {
  active: string;
}
