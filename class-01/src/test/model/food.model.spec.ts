import { FoodModel } from "../../models/food.model";

describe("Classes", () => {
  it("Class FoodModel", () => {
    const foodModel = new FoodModel("Apple", "Red", 1000);

    expect(foodModel.getName()).toEqual("Apple");
    expect(foodModel.getDescription()).toEqual("Red");
    expect(foodModel.getPrice()).toEqual(1000);
  });
});
