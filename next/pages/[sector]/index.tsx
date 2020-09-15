import { NextPage } from "next"; // https://linguinecode.com/post/next-js-typescript-getinitialprops

import sectors, {
  cloud,
  database,
  dev_env,
  web_back,
  web_front,
} from "@/scaffoldings/sectors";

type props = {
  sector: string;
  sectorInfo:
    | typeof sectors
    | typeof cloud
    | typeof database
    | typeof web_front
    | typeof dev_env
    | typeof web_back;
};

const SectorPage: NextPage<any> = ({ sector, sectorInfo }: props) => {
  return (
    <h1>
      {sector} / {sectorInfo}
    </h1>
  );
};

SectorPage.getInitialProps = async ({ query }) => {
  const sector = query.sector || "dashboard";
  let sectorInfo = {};
  switch (sector) {
    case "cloud-computing":
      sectorInfo = cloud; // sector_cloud;
      break;
    case "database":
      sectorInfo = database; //sector_database;
      break;
    case "dev-env":
      sectorInfo = dev_env; // sector_dev_env;
      break;
    case "web-back":
      sectorInfo = web_back; // sector_web_back;
      break;
    case "web-front":
      sectorInfo = web_front; // sector_web_front;
      break;
    default:
      sectorInfo = sectors;
  }

  return { sector: sector, sectorInfo: sectorInfo };
};

export default SectorPage;
