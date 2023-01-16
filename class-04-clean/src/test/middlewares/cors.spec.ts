import request from "supertest";
import app from "../../core/config/app";

describe("Cors", () => {
  test("Should verify open cors", async () => {
    app.get("/test-cors", (req, res) => {
      res.send();
    });

    await request(app)
      .get("/test-cors")
      .expect("eccess-control-allow-origin", "*")
      .expect("eccess-control-allow-headers", "*")
      .expect("eccess-control-allow-methods", "*");
  });
});
