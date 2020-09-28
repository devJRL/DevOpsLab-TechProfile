import { NextPage } from "next";
import Link from "next/link";

import "./index.scss";
import Layouts from "@/components/_layouts";
import Post from "@/components/_units/post";
import RenderCharts from "@/components/charts";
import {
  tech,
  techLeft,
  techRight,
  info,
  simpleInfo,
} from "@/scaffoldings/techs";

const DashboardPage: NextPage<any> = () => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post
          title={"Tech-Stacks"}
          generatedContents={makeTechStacks()}
          arrow_href="/devops"
        />
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
      {makeIconSrc()}
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
            techLeft[1].title,
            techLeft[0].title,
          ],
          datas: [100, 100, 100, 100],
        })}
      </div>
      <div className={`${cls}__side`}>{makeTechPart(techRight, "right")}</div>
    </div>
  );
};

const makeTechPart = (techs: tech[], side: string) => {
  return techs.map(({ title, stacks, link }: tech, index: number) => (
    <Link key={index} href={link} as={link}>
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
  const subcls = "simple-info";
  return (
    <div className={subcls}>
      {simpleInfo.map(({ imgUrl, title, content }: info, index: number) => (
        <div key={index} className={`${subcls}__box`}>
          <img src={`/static/images/icons/${imgUrl}`} />
          <div className={`${subcls}__box-info`}>
            <p>{title}</p>
            <span>{content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const makeIconSrc = () => {
  const subcls = "icon-src";
  return (
    <div className={subcls}>
      icon designed by '
      <a
        target="_blank"
        href="https://www.flaticon.com/kr/authors/chanut"
        title="Chanut"
      >
        Chanut
      </a>
      ' served from '
      <a target="_blank" href="https://www.flaticon.com/kr/" title="Flaticon">
        www.flaticon.com
      </a>
      '
    </div>
  );
};

export default DashboardPage;
