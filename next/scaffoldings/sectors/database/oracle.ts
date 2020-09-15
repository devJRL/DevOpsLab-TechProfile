import Sector, { level, spec } from "../Sector";

const sec: string = "ORACLE";
const lev: level = { point: 2, basis: "Dev. [11g]" };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Plan Tables with Normal Form (1~3NF)",
      "Run in docker container: MySQL 5.x, 8.x",
      "Understand on Key & Index",
      "Create View: Other User with DB Sharing, sub-query",
      "Create Events: scheduling on DB",
      "Create Functions: sequence of PK(MySQL 5.x)",
      "Create Procedures for Multi-purpose business logic",
    ],
  },
];

const oracle: Sector = new Sector(sec, lev, specs);

export default oracle;
