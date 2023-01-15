import { Team } from "./src/models/team.model";

describe("Team class", () => {
  test("Position", () => {
    const team = new Team();
    const position = {
      name: "goalkeeper",
      tShirt: 1,
      skills: ["Run"],
    };
    expect(
      team.position(position.name, position.tShirt, position.skills)
    ).toEqual(["goalkeeper", 1, ["Run"]]);
  });

  test("Soccer", () => {
    const soccerPlay = new Team();
    expect(soccerPlay.attacker("")).toBe("attacker");
  });
});
