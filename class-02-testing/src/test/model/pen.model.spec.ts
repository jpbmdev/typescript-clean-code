import { Pen } from "../../models/pen.model";

describe("Pen", () => {
  test("write", () => {
    const pen = new Pen("Hola Mundo");
    expect(pen.write()).toBe("Hola Mundo");
  });
});
