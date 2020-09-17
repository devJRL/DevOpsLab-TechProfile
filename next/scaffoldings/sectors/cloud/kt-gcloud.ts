import Sector, { level, spec } from "../Sector";

const sec: string = "KT G-Cloud";
const lev: level = {
  point: 2,
  basis: "Dev.",
};
const specs: spec[] = [
  {
    subtitle: "Used Services list.",
    relations: ["Instance, Simple Storage, NAS"],
  },
  {
    subtitle: "Special Note.",
    relations: [
      "Design architecture and protocols (SSH/HTTPS/SMTP)",
      "Set OS Security settings",
      "Regist SSH Key Pair on infrastructure",
      "Install a third-party library in closed private network",
    ],
  },
];

const kt_gcloud: Sector = new Sector(sec, lev, specs);

export default kt_gcloud;
