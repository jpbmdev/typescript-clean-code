import request from "supertest";
import app from "../../core/config/app";

describe("Body-Parser", () => {
  test("Should Body-Parse", async () => {
    app.post("/body-parser", (req, res) => {
      res.send(req.body);
    });

    const body = { name: "Geovane" };
    const response = await request(app).post("/body-parser").send(body);

    expect(response.body).toEqual(body);
  });
});
