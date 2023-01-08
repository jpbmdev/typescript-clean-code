import { RegisterVehicle } from "../../controllers/register-vehicle";
import { MissingFormalParameter } from "../../errors/client.error";

describe("RegisterVehicle", () => {
  test("if the name does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        // name: "Nissan",
        model: "DXT",
        year: 2020,
        color: "red",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("name"));
  });

  test("if the model does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        // model: "DXT",
        year: 2020,
        color: "red",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("model"));
  });

  test("if the model does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        // year: 2020,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("year"));
  });

  test("if the color does not exists return 400", () => {
    const sut = new RegisterVehicle();
    const httpRequest = {
      body: {
        name: "Nissan",
        model: "DXT",
        year: 2020,
        // color: "red",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter("color"));
  });
});
