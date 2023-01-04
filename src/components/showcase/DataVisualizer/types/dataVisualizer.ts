export interface GraphProps {
  id: string;
  label: string;
  dataSets: string;
  sampleSize: string;
  barOne: string;
  barTwo: string;
  barThree: string;
  barFour: string;
}

export interface DataVisualizerProps {
  data: {
    graphTitle: string;
    graphBackgroundColor: string;
    graphData: GraphProps[];
  };
}

export interface ActiveProps {
  active: string;
}

export interface BackgroundColorProps {
  backgroundColor: string;
}
