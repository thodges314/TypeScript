interface Vehicle1 {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle1): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
