export interface BarProps {
  metric: string;
}

export interface GraphProps {
  id: string;
  label: string;
  dataSets: string;
  sampleSize: string;
  barMetrics: BarProps[];
}

export interface DataVisualizerProps {
  data: {
    graphTitle: string;
    graphBackgroundColor: string;
    barBackgroundColors: string[];
    barLabels: string[];
    graphData: GraphProps[];
  };
}

export interface ActiveProps {
  active: string;
}

export interface BackgroundColorProps {
  backgroundColor: string;
}
