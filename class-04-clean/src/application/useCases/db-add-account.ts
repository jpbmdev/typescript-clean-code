import { VehicleModel } from "../../domain/models/vehicle.model";
import {
  AddAccount,
  AddAccountVehicle,
} from "../../domain/useCases/add-account";
import VehicleService from "../../services/vehicle.service";
import { MailNodemailerProvider } from "../../utils-adapters/nodemailer";

export class DBAddAccount implements AddAccount {
  constructor(private readonly mailNodemailerProvider: MailNodemailerProvider) {
    this.mailNodemailerProvider = mailNodemailerProvider;
  }

  async add(vehicle: AddAccountVehicle): Promise<VehicleModel> {
    const vehicleDb: any = await VehicleService.create(vehicle);

    /*
    await this.mailNodemailerProvider.addEmail({
      to: {
        name: vehicleDb.name,
        email: vehicleDb.email,
      },
      from: {
        name: "JP",
        email: "testemail@gmail.com",
      },
      subject: "Your vehicle is created",
      body: "<p>Welcome to your dealer!!!</p>",
    });
    */

    return vehicleDb;
  }
}
