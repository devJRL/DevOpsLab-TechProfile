import Sector from "./Sector";

import aws from "./cloud/aws";
import gcp from "./cloud/gcp";
import kt_gcloud from "./cloud/kt-gcloud";

import mysql from "./database/mysql";
import oracle from "./database/oracle";

import docker from "./devops/docker";
import kubernetes from "./devops/kubernetes";
import git from "./devops/git";
import svn from "./devops/svn";

import javascript from "./web-front/javascript";

import java from "./web-back/java";
import nodejs from "./web-back/nodejs";

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

const devops: SectorSet = {
  title: "DevOps",
  list: [docker, kubernetes, git, svn],
};

const web_front: SectorSet = {
  title: "Front-end Application",
  list: [javascript],
  relatedSkills: "SCSS, JSON, XML, YAML",
};

const web_back: SectorSet = {
  title: "Backend Application",
  list: [java, nodejs],
  relatedSkills: "Bash, Zsh, Docker & compose, Kubernetes, Github Actions",
};

const sectors = {
  cloud: cloud,
  databse: database,
  devops: devops,
  web_front: web_front,
  web_back: web_back,
};

export type { SectorSet };

export { cloud, database, devops, web_front, web_back };

export default sectors;
