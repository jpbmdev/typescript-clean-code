import { DBAddAccount } from "../../application/useCases/db-add-account";
import { RegisterVehicle } from "../../controllers/register-vehicle";

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccount = new DBAddAccount();
  const registerVehicle = new RegisterVehicle(dbAddAccount);
  return registerVehicle;
};
