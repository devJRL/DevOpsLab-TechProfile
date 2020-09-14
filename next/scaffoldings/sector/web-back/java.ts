import Sector, { level, spec } from "../Sector";

const sec: string = "Java";
const lev: level = { point: 3, basis: "Prod." };
const specs: spec[] = [
  {
    subtitle: "Experience.",
    relations: [
      "JSP/Spring 4.x (on Maven) - SSR & WAS",
      "Spring Boot 2.x (on Gradle) - REST API",
      "DI for Spring beans with  XML & Annotation(@)",
      "Scheduling-tasks with cron expression",
      "Connecting on DB with MyBatis",
      "Get thread dump on production WAS server",
      "Tracing log on multi-thread Java Engines: SMTP, POP3, IMAP",
    ],
  },
  {
    subtitle: "Related.",
    relations: ["Crinity Mail on AWS (SaaS Production)"],
  },
];

const java: Sector = new Sector(sec, lev, specs);

export default java;
