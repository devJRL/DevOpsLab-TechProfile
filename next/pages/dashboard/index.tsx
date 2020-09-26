import { NextPage } from "next";

import "./index.scss";
import Layouts from "@/components/_layouts";
import Post from "@/components/_units/post";
import RenderCharts from "@/components/charts";
import Link from "next/link";

const DashboardPage: NextPage<any> = () => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post
          title={"Tech-Stacks"}
          generatedContents={makeDoughnutDashboard()}
        />
      }
    />
  );
};

type tech = {
  title: string;
  stacks: string[];
  link: string;
};

const techLeft: tech[] = [
  {
    title: "Cloud Services",
    stacks: ["AWS & GCP", "KT G-Cloud"],
    link: "/cloud",
  },
  {
    title: "Database",
    stacks: ["MySQL", "ORACLE"],
    link: "/database",
  },
];

const techRight: tech[] = [
  {
    title: "DevOps",
    stacks: ["Docker & Kubernetes", "Jenkins, Ansible, etc."],
    link: "/devops",
  },
  {
    title: "Full stack",
    stacks: ["Spring/Boot", "Next.js & Express.js"],
    link: "/full-stack",
  },
];

const cls = "dashboard";
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

export default DashboardPage;
