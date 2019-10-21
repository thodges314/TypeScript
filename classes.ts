class Vehicle {
  protected drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
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

const car = new Car();

car.honk();
car.startDrivingProcess();
