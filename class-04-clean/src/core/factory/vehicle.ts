import { DBAddAccount } from "../../application/useCases/db-add-account";
import { RegisterVehicle } from "../../controllers/register-vehicle";
import { MailNodemailerProvider } from "../../utils-adapters/nodemailer";

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailNodemailerProvider = new MailNodemailerProvider();
  const dbAddAccount = new DBAddAccount(mailNodemailerProvider);
  const registerVehicle = new RegisterVehicle(dbAddAccount);
  return registerVehicle;
};
