import { CarHelper } from "../../helpers/car.helper";

export class CarModel {
  constructor(private readonly vehicle: CarHelper) {}

  getName(): string {
    return this.vehicle.name;
  }

  getModel(): string {
    return this.vehicle.model;
  }

  getYear(): number {
    return this.vehicle.year;
  }

  getPrice(): number {
    return this.vehicle.price;
  }

  getInventory(): boolean {
    return this.vehicle.inventory;
  }
}
