import Sector, { level, spec } from "../Sector";

const sec: string = "SVN";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Auto maven build in docker container from svn repository",
      "Solution tagging and hotfix (in branches and trunk)",
    ],
  },
];

const git: Sector = new Sector(sec, lev, specs);

export default git;
