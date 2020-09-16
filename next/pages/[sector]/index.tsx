import { NextPage } from "next"; // https://linguinecode.com/post/next-js-typescript-getinitialprops
import parse from "html-react-parser"; // yarn add html-react-parser

import Sector, { dummySector } from "@/scaffoldings/sectors/Sector";
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

const SectorPage: NextPage<any> = ({ selectedSector, sectorArray }: props) => {
  return (
    <div>
      <p>{`selectedSector: ${selectedSector}`}</p>
      {sectorArray.map((sector: Sector, index: number) => (
        <p>
          sector[{index}]: {parse(JSON.stringify(sector))}
        </p>
      ))}
    </div>
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
