import { NextPage } from "next";

import "./index.scss";
import Layouts from "@/components/_layouts";
import Post from "@/components/_units/post";
import RenderCharts from "@/components/charts";

const DashboardPage: NextPage<any> = () => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post
          title={"Dash board"}
          generatedContents={makeDoughnutDashboard()}
        />
      }
      isDraggable={true}
    />
  );
};

const makeDoughnutDashboard = () => {
  return RenderCharts.Doughnut({
    labels: ["Cloud", "Front", "Back", "DevOps"],
    datas: [25, 25, 25, 25],
  });
};

export default DashboardPage;
