import Sector, { level, spec } from "../Sector";

const sec: string = "Docker";
const lev: level = { point: 2, basis: "Toy." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Build docker image",
      "Tag docker image on docker repository",
      "Set up '3-tier' on Docker Compose: React - Express - MySQL",
      "Using volume container to sepreate logs and app-datas",
    ],
  },
  {
    subtitle: "Related.",
    relations: [
      "Book: 가장 빨리 만나는 Docker",
      "Book: 도커/쿠버네티스를 활용한 컨테이너 개발 실전 입문",
      "Community: AWSKRUG Container 소모임",
    ],
  },
];

const docker: Sector = new Sector(sec, lev, specs);

export default docker;
