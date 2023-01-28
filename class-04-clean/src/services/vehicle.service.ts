import { VehicleModel } from "../domain/models/vehicle.model";
import vehicleRepository from "../domain/repositories/vehicle.repository";

export class VehicleService {
  async create(vehicle: VehicleModel) {
    return await vehicleRepository.create(vehicle);
  }
}

export default new VehicleService();
