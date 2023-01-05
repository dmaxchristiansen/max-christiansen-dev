import {
  BLUE_GRIMLY,
  BLUE_SKY,
  PURPLE_PASTEL,
  ROYAL_BLUE,
  SEABED,
} from "src/styles/colors";

export const ungulateDataConfig = {
  graphTitle: "Disease Reduction by Species",
  graphBackgroundColor: BLUE_GRIMLY,
  barBackgroundColors: [SEABED, BLUE_SKY, ROYAL_BLUE, PURPLE_PASTEL],
  barLabels: ["Rabies", "Giardiasis", "Q Fever", "Tularemia"],
  graphData: [
    {
      id: "pronghorn",
      label: "Pronghorn",
      dataSets: "12",
      sampleSize: "2,015",
      barMetrics: [
        { metric: "46%" },
        { metric: "92%" },
        { metric: "74%" },
        { metric: "84%" },
      ],
    },
    {
      id: "elk",
      label: "Elk",
      dataSets: "5",
      sampleSize: "894",
      barMetrics: [
        { metric: "89%" },
        { metric: "51%" },
        { metric: "40%" },
        { metric: "63%" },
      ],
    },
    {
      id: "bighorn",
      label: "Bighorn",
      dataSets: "14",
      sampleSize: "3,886",
      barMetrics: [
        { metric: "47%" },
        { metric: "48%" },
        { metric: "64%" },
        { metric: "79%" },
      ],
    },
    {
      id: "moose",
      label: "Moose",
      dataSets: "7",
      sampleSize: "1,205",
      barMetrics: [
        { metric: "89%" },
        { metric: "89%" },
        { metric: "93%" },
        { metric: "74%" },
      ],
    },
    {
      id: "caribou",
      label: "Caribou",
      dataSets: "11",
      sampleSize: "1,944",
      barMetrics: [
        { metric: "41%" },
        { metric: "46%" },
        { metric: "59%" },
        { metric: "41%" },
      ],
    },
  ],
};
