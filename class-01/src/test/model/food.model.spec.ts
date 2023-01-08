import { FoodModel } from "../../models/food.model";

describe("Classes", () => {
  it("Class FoodModel", () => {
    const foodModel = new FoodModel({
      name: "Apple",
      description: "Red",
      price: 1000,
      inventory: 25,
    });

    expect(foodModel.getName()).toEqual("Apple");
    expect(foodModel.getDescription()).toEqual("Red");
    expect(foodModel.getPrice()).toEqual(1000);
    expect(foodModel.getInventory()).toEqual(25);
  });
});
