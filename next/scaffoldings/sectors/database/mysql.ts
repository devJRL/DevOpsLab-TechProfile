import Sector, { level, spec } from "../Sector";

const sec: string = "MySQL";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Install (binary & complie): MySQL 5.x",
      "Run in docker container: MySQL 5.x, 8.x",
      "Plan Tables with Normal Form (1~3NF)",
      "Understand on Key & Index",
      "Create View: Other User with DB Sharing, sub-query",
      "Create Events: scheduling on DB",
      "Create Functions: sequence of PK(MySQL 5.x)",
      "Create Procedures for Multi-purpose business logic",
      "Find Slow Query & Improve Performance with hint syntax",
    ],
  },
];

const mysql: Sector = new Sector(sec, lev, specs);

export default mysql;
