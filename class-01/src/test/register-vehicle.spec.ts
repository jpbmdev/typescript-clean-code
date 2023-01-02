import { RegisterVehicle } from "../controllers/register-vehicle";

describe("RegisterVehicle", () => {
  test("if the name does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: "Nissan",
        model: "DXT",
        year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the name"));
  });

  test("if the model does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        // model: "DXT",
        year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("error in the model"));
  });
});
