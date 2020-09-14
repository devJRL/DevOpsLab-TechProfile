import Sector from "./Sector";

const CloudComputing = new Sector(
  // sector
  "Cloud Computing",
  // level
  { point: 3, basis: "Prod-Exp" },
  // specs
  [
    {
      subtitle: "Used Services list.",
      relations: [
        "Basic: CloudFront / ELB(ALB / NLB) / EC2 + EBS + EFS / S3 / RDS",
        "Ops: Code Series with CI / CD(CodeCommit ~CodeDeploy)",
        "Monitoring: AWS CLI + CloudWatch + SNS / SQS / Lambda",
        "Architects: Draw.io",
      ],
    },
  ]
);

export default CloudComputing;
