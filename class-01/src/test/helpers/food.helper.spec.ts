import { FoodHelper } from "../../helpers/food.helper";

describe("Food Helper", () => {
  test("Food Helper", () => {
    const foodHelper = new FoodHelper();
    expect(foodHelper).toEqual(foodHelper);
  });
});
