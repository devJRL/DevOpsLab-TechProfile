import Sector, { level, spec } from "../Sector";

const sec: string = "Node.js";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "RestAPI Server on Express.js",
      "Run in docker container build with Express.js",
      "TDD: mocha.js, should.js, supertest.js",
      "etc: async(axios.js), ORM(sequelize.js)",
    ],
  },
  {
    subtitle: "Related.",
    relations: ["TDD-Node.js-APIserver (GitHub Repository)"],
  },
];

const nodejs: Sector = new Sector(sec, lev, specs);

export default nodejs;
