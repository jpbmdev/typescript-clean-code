import { FoodModel } from "../../models/food.model";

describe("Classes", () => {
  it("Class FoodModel", () => {
    const foodModel = new FoodModel({
      name: "Apple",
      description: "Red",
      price: 1000,
      inventory: 25,
    });

    expect(foodModel.getFoodModel()).toEqual(foodModel);
    expect(foodModel.getName()).toBe("Apple");
    expect(foodModel.getDescription()).toBe("Red");
    expect(foodModel.getPrice()).toBe(1000);
    expect(foodModel.getInventory()).toBe(25);
  });
});
