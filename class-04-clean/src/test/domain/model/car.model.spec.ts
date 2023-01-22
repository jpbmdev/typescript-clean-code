import { CarModel } from "../../../domain/models/car.model";

describe("Classes", () => {
  it("Class VehicleModel", () => {
    const vehicleModel = new CarModel({
      name: "Nissan",
      model: "DXT",
      year: 2020,
      price: 25,
      inventory: true,
    });

    expect(vehicleModel.getName()).toEqual("Nissan");
    expect(vehicleModel.getModel()).toEqual("DXT");
    expect(vehicleModel.getYear()).toEqual(2020);
    expect(vehicleModel.getPrice()).toEqual(25);
    expect(vehicleModel.getInventory()).toEqual(true);
  });
});
