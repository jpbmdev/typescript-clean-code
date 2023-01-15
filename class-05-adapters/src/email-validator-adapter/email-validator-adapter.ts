import { IEmailValidator } from "../protocols/iemail-validator";
// import validator from "validator";
import { validate } from "email-validator";

export class EmailValidatorAdatpter implements IEmailValidator {
  isValid(email: string) {
    // return validator.isEmail(email);
    return validate(email);
  }
}
