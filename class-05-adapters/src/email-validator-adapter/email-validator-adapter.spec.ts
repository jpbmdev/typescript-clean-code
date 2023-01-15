import { EmailValidatorAdatpter } from "./email-validator-adapter";

describe("Email Validator", () => {
  test("Should return false validator", () => {
    const sut = new EmailValidatorAdatpter();
    const isValid = sut.isValid("LOLXD");
    expect(isValid).toBe(false);
  });
});

describe("Email Validator", () => {
  test("Should return true validator", () => {
    const sut = new EmailValidatorAdatpter();
    const isValid = sut.isValid("test@gmail.com");
    expect(isValid).toBe(true);
  });
});
