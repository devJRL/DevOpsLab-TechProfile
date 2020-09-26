import { NextPage, NextPageContext } from "next"; // https://linguinecode.com/post/next-js-typescript-getinitialprops
import { ReactNode } from "react";

import "@/public/_global.scss";
import "./index.scss";
import Layouts from "@/components/_layouts/";
import Post from "@/components/_units/post";

import Sector, { level, spec } from "@/scaffoldings/sectors/Sector";
import {
  cloud,
  database,
  dev_env,
  web_back,
  web_front,
} from "@/scaffoldings/sectors";

type props = {
  selectedSector: string;
  sectorArray: Sector[];
};

const cls = "sector";

const makeContents = (sectorArray: Sector[]): ReactNode => {
  // REF | React Table - https://react-bootstrap.github.io/components/table/
  return (
    <table className={cls}>
      <tbody>
        {sectorArray.map((sectorData: Sector, index: number) =>
          makeSectorLow(sectorData, index)
        )}
      </tbody>
    </table>
  );
};

const makeSectorLow = (sectorData: Sector, index: number) => {
  return (
    <tr key={index}>
      {makeLeftMetaPart(sectorData.sector, sectorData.level)}
      {makeRightDetailPart(sectorData.specs)}
    </tr>
  );
};

const makeLeftMetaPart = (sectorName: string, sectorLevel: level) => {
  const cls_meta = `${cls}-meta`;
  const cls_level = `${cls_meta}__level`;
  return (
    <td className={`${cls}-td-left`}>
      <div className={cls_meta}>
        <div className={`${cls_meta}__target`}>{sectorName}</div>
        <div className={cls_level}>
          <span className={`${cls_level}-point`}>
            {makeVisableLevelPoint(sectorLevel.point)}
          </span>
          <span className={`${cls_level}-bar`}></span>
          <span className={`${cls_level}-basis`}>
            {sectorLevel.basis || "Toy"}
          </span>
        </div>
      </div>
    </td>
  );
};

const makeVisableLevelPoint = (point: number = 1) => {
  if (point < 1 || point > 5) return "○○○○○";

  let visablePoints: string = "";
  for (let i = 0; i < 5; i++) visablePoints += i < point ? "●" : "○";
  return visablePoints;
};

const makeRightDetailPart = (specs: spec[]) => {
  const cls_spec = `${cls}-spec`;
  const cls_spec_picked = `${cls_spec}__picked`;
  return (
    <td className={`${cls}-td-right`}>
      <div className={cls_spec}>
        {specs.map(({ subtitle, relations }: spec, idx: number) => (
          <div key={idx} className={cls_spec_picked}>
            <div className={`${cls_spec_picked}-title`}>{subtitle}</div>
            <div className={`${cls_spec_picked}-relations`}>
              {relations.map((rel: string, i: number) => (
                <p key={i}>{rel}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </td>
  );
};

const SectorPage: NextPage<any> = ({ selectedSector, sectorArray }: props) => {
  return (
    <Layouts.OneBody
      oneBodyComponent={
        <Post
          title={selectedSector}
          generatedContents={makeContents(sectorArray)}
        />
      }
      isDraggable={true}
    />
  );
};

SectorPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  switch (query.sector || "dashboard") {
    case "cloud":
      return {
        selectedSector: "Cloud Computing",
        sectorArray: cloud.list,
      };

    case "database":
      return {
        selectedSector: "Database",
        sectorArray: database.list,
      };

    case "devops":
      return {
        selectedSector: "Dev.Environment",
        sectorArray: dev_env.list,
      };

    case "full-stack":
    case "web-front":
      return {
        selectedSector: "Front-end",
        sectorArray: web_front.list,
      };

    case "web-back":
      return {
        selectedSector: "Back-end",
        sectorArray: web_back.list,
      };

    default:
      // Redirection on Server Side
      // REF | https://dev.to/justincy/client-side-and-server-side-redirection-in-next-js-3ile
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: "/dashboard" });
        ctx.res.end();
      }
      return {};
  }
};

export default SectorPage;
