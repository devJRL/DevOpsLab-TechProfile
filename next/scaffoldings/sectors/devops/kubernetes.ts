import Sector, { level, spec } from "../Sector";

const sec: string = "Kubernetes";
const lev: level = { point: 2, basis: "Toy." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "Understatnd k8s-components",
      "Expose k8s-cluster using 'ingress service'",
      "Rolling-Update k8s-components with deployment",
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

const kubernetes: Sector = new Sector(sec, lev, specs);

export default kubernetes;
