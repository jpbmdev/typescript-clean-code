import { InvalidArgument } from "../../errors/invalid-arg.error";
import { UrlLogin } from "../../protocols/http.protocol";

describe("Protocols Http and Querys", () => {
  test("Url login", () => {
    const parseUrl = UrlLogin.parseUrl("http://localhost:3000/login");

    expect(parseUrl.href).toBe("http://localhost:3000/login");
    expect(parseUrl.port).toBe("3000");
  });

  test("Responses Query", () => {
    const parseUrl = UrlLogin.parseUrl(
      "http://localhost:3000/login?user=user&password=password"
    );

    const expectAuth = {
      user: "user",
      password: "password",
    };

    expect(parseUrl.query).toEqual(expectAuth);
  });

  test("Invalid Url", () => {
    function expectError(): void {
      UrlLogin.parseUrl("");
    }

    expect(expectError).toThrowError(new InvalidArgument(""));
  });
});
