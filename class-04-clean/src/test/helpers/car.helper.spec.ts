import { CarHelper } from "../../helpers/car.helper";

describe("Car Helper", () => {
  test("Car Helper", () => {
    const carHelper = new CarHelper();
    expect(carHelper).toEqual(carHelper);
  });
});
