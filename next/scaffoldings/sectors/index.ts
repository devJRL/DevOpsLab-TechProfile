import Sector from "./Sector";
import aws from "./cloud/aws";
import gcp from "./cloud/gcp";
import kt_gcloud from "./cloud/kt-gcloud";
import mysql from "./database/mysql";
import oracle from "./database/oracle";
import git from "./dev-env/git";
import svn from "./dev-env/svn";
import java from "./web-back/java";
import nodejs from "./web-back/nodejs";
import javascript from "./web-front/javascript";

type SectorSet = {
  title: string;
  list: Sector[];
  relatedSkills?: string;
};

const cloud: SectorSet = {
  title: "Cloud Computing",
  list: [aws, gcp, kt_gcloud],
  relatedSkills: "Bash, Zsh, Docker & compose, Kubernetes, Github Actions",
};

const database: SectorSet = {
  title: "Database",
  list: [mysql, oracle],
};

const dev_env: SectorSet = {
  title: "Development Environment",
  list: [git, svn],
};

const web_back: SectorSet = {
  title: "Backend Application",
  list: [java, nodejs],
  relatedSkills: "Bash, Zsh, Docker & compose, Kubernetes, Github Actions",
};

const web_front: SectorSet = {
  title: "Front-end Application",
  list: [javascript],
  relatedSkills: "SCSS, JSON, XML, YAML",
};

const sectors = {
  cloud: cloud,
  databse: database,
  dev_env: dev_env,
  web_back: web_back,
  web_front: web_front,
};

export type { SectorSet };

export { cloud, database, dev_env, web_back, web_front };

export default sectors;
