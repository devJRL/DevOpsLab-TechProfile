import Sector, { level, spec } from "../Sector";

const sec: string = "GCP";
const lev: level = { point: 1, basis: "Toy." };
const specs: spec[] = [
  {
    subtitle: "Experienced Services list.",
    relations: ["Compute Engine, Big Query", "GCloud SDK"],
  },
];

const gcp: Sector = new Sector(sec, lev, specs);

export default gcp;
