import { NextPage, NextPageContext } from "next"; // https://linguinecode.com/post/next-js-typescript-getinitialprops
import { ReactNode } from "react";

import "./index.scss";
import Layouts from "@/components/_layouts/";
import Post from "@/components/_units/post";
import Arrows from "@/components/_units/arrow";

// TODO: Transfer with REST API
import Sector, { level, spec } from "@/scaffoldings/sectors/Sector";
import {
  cloud,
  database,
  devops,
  web_back,
  web_front,
} from "@/scaffoldings/sectors";

type props = {
  selectedSector: string;
  sectorArray: Sector[];
  prevLink?: string;
  nextLink?: string;
  prevTarget?: string;
  nextTarget?: string;
};

const SectorPage: NextPage<any> = ({
  selectedSector,
  sectorArray,
  prevLink = "/dashboard",
  nextLink = prevLink,
  prevTarget = "Dashboard",
  nextTarget = prevTarget,
}: props) => {
  const cls = "linked-arrow";
  const isNeedToOffset = sectorArray && sectorArray.length > 2;
  return (
    <>
      <div className={`${cls} left`}>
        <div className={`${cls}__flexbox`}>
          <a className={`${cls}__flexbox-button`} href={prevLink}>
            <p>Next Page</p>
            <span>{prevTarget}</span>
          </a>
          <Arrows.Left href={prevLink} as={prevLink} />
        </div>
      </div>
      <Layouts.OneBody
        oneBodyComponent={
          <Post
            title={selectedSector}
            generatedContents={makeContents(sectorArray)}
            isNeedToOffset={isNeedToOffset}
          />
        }
        isScrollable={true}
      />
      <div className={`${cls} right`}>
        <div className={`${cls}__flexbox`}>
          <a className={`${cls}__flexbox-button`} href={nextLink}>
            <p>Next Page</p>
            <span>{nextTarget}</span>
          </a>
          <Arrows.Right href={nextLink} as={nextLink} />
        </div>
      </div>
    </>
  );
};

const cls = "sector";

const makeContents = (sectorArray: Sector[]): ReactNode => {
  // REF | React Table - https://react-bootstrap.github.io/components/table/
  return (
    <table className={cls}>
      <tbody>
        {sectorArray.map((sectorData: Sector, index: number) => (
          <tr key={index}>
            {makeLeftMetaPart(sectorData.sector, sectorData.level)}
            {makeRightDetailPart(sectorData.specs)}
          </tr>
        ))}
      </tbody>
    </table>
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

SectorPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  switch (query.sector || "dashboard") {
    case "devops":
      return {
        selectedSector: "DevOps",
        sectorArray: devops.list,
        prevLink: "/dashboard",
        nextLink: "/cloud",
        prevTarget: "Dashboard",
        nextTarget: "Cloud Computing",
      };

    case "cloud":
      return {
        selectedSector: "Cloud Computing",
        sectorArray: cloud.list,
        prevLink: "/devops",
        nextLink: "/full-stack",
        prevTarget: "DevOps",
        nextTarget: "Full-Stack",
      };

    case "full-stack":
    case "back-end":
      return {
        selectedSector: "Back-end",
        sectorArray: web_back.list,
        prevLink: "/cloud",
        nextLink: "/front-end",
        prevTarget: "Cloud Computing",
        nextTarget: "Front-end",
      };

    case "front-end":
      return {
        selectedSector: "Front-end",
        sectorArray: web_front.list,
        prevLink: "/back-end",
        nextLink: "/database",
        prevTarget: "Back-end",
        nextTarget: "Database",
      };

    case "database":
      return {
        selectedSector: "Database",
        sectorArray: database.list,
        prevLink: "/back-end",
        nextLink: "/dashboard",
        prevTarget: "Back-end",
        nextTarget: "Intro",
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
