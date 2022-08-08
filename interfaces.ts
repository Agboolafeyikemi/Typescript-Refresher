interface ReportTable {
  //   name: string;
  //   year: number;
  //   broken: boolean;
  summary(): string;
}

const drink = {
  color: "red",
  carbonated: true,
  suger: 40,
  summary(): string {
    return `My drink has ${this.suger} grams of sugar`;
  },
};
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printSummary = (item: ReportTable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
