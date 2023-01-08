import { FoodHelper } from "../helpers/food.helper";

export class FoodModel {
  constructor(private readonly food: FoodHelper) {}

  getName(): string {
    return this.food.name;
  }

  getDescription(): string {
    return this.food.description;
  }

  getPrice(): number {
    return this.food.price;
  }

  getInventory(): number {
    return this.food.inventory;
  }
}