import Sector, { level, spec } from "../Sector";

const sec: string = "JavaScript";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "JSP with JS(ES5), jQuery, AJAX",
      "Bind with JSON to Table Framework (table.js)",
      "Resolve on CORS using TSL/SSL certification",
      "SPA: React, Redux, Angular",
      "SSR: Next.js (with TypeScript)",
    ],
  },
];

const javascript: Sector = new Sector(sec, lev, specs);

export default javascript;
