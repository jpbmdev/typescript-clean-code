import { Vehicle } from "../models/vehicle";

export interface IVehicleRepository {
  findById(id: string): Promise<Vehicle>;
  save(vehicle: Vehicle): Promise<void>;
}
