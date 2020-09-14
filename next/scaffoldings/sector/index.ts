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

const Sectors = {
  cloud: {
    title: "Cloud Computing",
    aws: aws,
    gcp: gcp,
    kt_gcloud: kt_gcloud,
    relatedSkills: "Bash, Zsh, Docker & compose, Kubernetes, Github Actions",
  },
  databse: {
    title: "Database",
    mysql: mysql,
    oracle: oracle,
  },
  dev_env: {
    title: "Development Environment",
    git: git,
    svn: svn,
  },
  web_back: {
    title: "Backend Application",
    java: java,
    nodejs: nodejs,
    relatedSkills: "Bash, Zsh, Docker & compose, Kubernetes, Github Actions",
  },
  web_front: {
    title: "Front-end Application",
    javascript: javascript,
    relatedSkills: "SCSS, JSON, XML, YAML",
  },
};

export default Sectors;
