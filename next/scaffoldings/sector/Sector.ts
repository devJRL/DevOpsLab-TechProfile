type level = {
  point: number; // 1 ~ 5
  basis: string; // Prod-Exp
};

type spec = {
  subtitle: string; // "Used Services list"
  relations: string[]; // "Basic: CloudFront .."
};

interface SectorForm {
  readonly sector: string; // "Cloud Compute"
  readonly level: level; // 1 ~ 5
  readonly specs: spec[];
}

class Sector implements SectorForm {
  constructor(
    public sector: string = "Anonymous Sector",
    public level: level = {
      point: 1,
      basis: "Toy-level",
    },
    public specs: spec[] = [
      {
        subtitle: "This is first subtitle.",
        relations: ["1. string message one", "2. string message two"],
      },
      {
        subtitle: "This is seconde subtitle.",
        relations: ["a) ABCD", "b) 1234"],
      },
    ]
  ) {}
}

export default Sector;
