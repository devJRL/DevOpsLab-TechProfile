import Sector, { level, spec } from "../Sector";

const sec: string = "Git";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Merge & Rebase for master branch (production)",
      "Resolve bug branches and Blame cause commit",
      "Migration from SVN to CodeCommit",
      "Install & Operate tech-blog on Jekyll-4.0 in private",
      "Git Flow",
    ],
  },
  {
    subtitle: "Related.",
    relations: [
      "SVN & Migration to git (svn2git)",
      "Crinity-Tech-Blog in private server",
      "Have own GitHub Web-Hosting on Jekyll 4.0",
    ],
  },
];

const git: Sector = new Sector(sec, lev, specs);

export default git;
