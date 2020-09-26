import { NextPage } from "next";
import Link from "next/link";

import "./index.scss";
import Layouts from "@/components/_layouts";
import Post from "@/components/_units/post";
import RenderCharts from "@/components/charts";
import { tech, techLeft, techRight } from "@/scaffoldings/techs";

const DashboardPage: NextPage<any> = () => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post title={"Tech-Stacks"} generatedContents={makeTechStacks()} />
      }
    />
  );
};

const cls = "dashboard";

const makeTechStacks = () => {
  return (
    <div className={`${cls}-wrapper`}>
      {makeDoughnutDashboard()}
      {makeSimpleInfo()}
    </div>
  );
};

const makeDoughnutDashboard = () => {
  return (
    <div className={cls}>
      <div className={`${cls}__side`}>{makeTechPart(techLeft, "left")}</div>
      <div className={`${cls}__graph`}>
        {RenderCharts.Doughnut({
          labels: [
            techRight[0].title,
            techRight[1].title,
            techLeft[0].title,
            techLeft[1].title,
          ],
          datas: [25, 25, 25, 25],
        })}
      </div>
      <div className={`${cls}__side`}>{makeTechPart(techRight, "right")}</div>
    </div>
  );
};

const makeTechPart = (techs: tech[], side: string) => {
  return techs.map(({ title, stacks, link }: tech, index: number) => (
    <Link href={link} as={link}>
      <a key={index} className={`${cls}__contents ${side}-part`}>
        <h3>{title}</h3>
        {stacks.map((stack: string, idx: number) => (
          <p key={idx}>{stack}</p>
        ))}
      </a>
    </Link>
  ));
};

const makeSimpleInfo = () => {
  return <div>This will be a simple info</div>;
};

export default DashboardPage;
