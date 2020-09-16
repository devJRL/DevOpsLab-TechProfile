import { NextPage } from "next"; // https://linguinecode.com/post/next-js-typescript-getinitialprops
import { ReactNode } from "react";

import Layouts from "@/components/_layouts/";
import Post from "@/components/_units/post";

import Sector, {
  level,
  spec,
  dummySector,
} from "@/scaffoldings/sectors/Sector";
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
  return (
    <td>
      <div className={cls_meta}>
        <div className={`${cls_meta}__target`}>{sectorName}</div>
        <div className={`${cls_meta}__level`}>
          <span>
            {sectorLevel.point} | {sectorLevel.basis}
          </span>
        </div>
      </div>
    </td>
  );
};

const makeRightDetailPart = (specs: spec[]) => {
  const cls_detail = `${cls}-detail`;
  const cls_detail_spec = `${cls_detail}__spec`;
  return (
    <td>
      <div className={cls_detail}>
        {specs.map(({ subtitle, relations }: spec, idx: number) => {
          return (
            <div key={idx} className={cls_detail_spec}>
              <div className={`${cls_detail_spec}-title`}>{subtitle}</div>
              <div className={`${cls_detail}-relations`}>
                {relations.map((rel: string, i: number) => (
                  <p key={i}>{rel}</p>
                ))}
              </div>
            </div>
          );
        })}
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
    />
  );
};

SectorPage.getInitialProps = async ({ query }) => {
  let selectedSector = query.sector || "dashboard";
  let sectorArray: Sector[];
  switch (selectedSector) {
    case "cloud":
      sectorArray = cloud.list;
      break;
    case "database":
      sectorArray = database.list;
      break;
    case "dev-env":
      sectorArray = dev_env.list;
      break;
    case "web-back":
      sectorArray = web_back.list;
      break;
    case "web-front":
      sectorArray = web_front.list;
      break;
    default:
      // # FIXME : redirect to dashboard
      selectedSector = "dashboard";
      sectorArray = [dummySector, dummySector, dummySector];
  }

  return {
    selectedSector: selectedSector,
    sectorArray: sectorArray,
  };
};

export default SectorPage;
