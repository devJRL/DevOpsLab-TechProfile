// REF | Chart.js - official docs   | https://www.chartjs.org/docs/latest/charts/doughnut.html
// REF | Chart.js + pure-javascript | https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/doughnut.js
import { Doughnut } from "react-chartjs-2"; // yarn add chart.js @types/chart.js react-chartjs-2

import { ChartArgs } from "@/interfaces/charts";

// REF | https://itnext.io/chartjs-tutorial-with-react-nextjs-with-examples-2f514fdc130
const RenderDoughnutChart = ({
  name,
  labels = [], // = ["Main", "MainLight", "SubLight", "Sub"],
  datas = [1, 1, 1, 1],
  width = 100,
  height = 100,
}: ChartArgs) => {
  // Chart Data
  const data = {
    labels: labels,
    datasets: [
      {
        data: datas,
        backgroundColor: [
          "#353866", // Color-G01-M
          "#AAABD3", // Color-G01-ML
          "#AAABD3", // Color-G01-ML
          "#353866", // Color-G01-M
        ],
        hoverBackgroundColor: [
          "#35386670", // Color-G01-M
          "#AAABD370", // Color-G01-ML
          "#AAABD370", // Color-G01-ML
          "#35386670", // Color-G01-M
        ],
      },
    ],
  };

  // Chart Options
  const options = {
    legend: {
      display: false,
    },
  };

  return (
    <>
      {name && <h2>{name}</h2>}
      <Doughnut data={data} width={width} height={height} options={options} />
    </>
  );
};

export default RenderDoughnutChart;
