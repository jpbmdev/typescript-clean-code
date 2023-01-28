import { VehicleModel } from "../../domain/models/vehicle.model";
import {
  AddAccount,
  AddAccountVehicle,
} from "../../domain/useCases/add-account";
import VehicleService from "../../services/vehicle.service";

export class DBAddAccount implements AddAccount {
  async add(vehicle: AddAccountVehicle): Promise<VehicleModel> {
    const vehicleDb: any = await VehicleService.create(vehicle);
    return vehicleDb;
  }
}
