class Vehicle {
  //   color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected drive(): void {
    console.log('chugga chugga');
  }

  private honk(): void {
    console.log('beep');
  }

  public startHonkingProcess() {
    this.honk();
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // call parent with whatever
  }
  protected drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
const vehicle = new Vehicle('orange');

const car = new Car(3, 'blue');

console.log(vehicle.color);

car.startHonkingProcess();
car.startDrivingProcess();
