import { Bird, Eagle } from "../../models/bird.model";

describe("Bird", () => {
  test("ShouldFly", () => {
    const bird = new Bird({
      name: "Bird",
      age: 30,
      origin: "North America",
    });

    expect(bird.fly()).toEqual("Bird");
  });

  test("Should Fly", () => {
    const eagle = new Eagle({
      name: "Eagle",
      age: 30,
      origin: "North America",
    });

    expect(eagle.fly()).toEqual("Eagle");
  });

  test("Shouldn't Fly", () => {
    const penguin = new Eagle({
      name: "penguin",
      age: 30,
      origin: "North America",
    });

    expect(penguin.fly()).toEqual(new Error("I cant Fly"));
  });
});
