import { CreateVehicleDto } from "../dto/createVehicle.dto";
import { IVehicleRepository } from "../interfaces/ivehicle.repository";
import { Vehicle } from "../models/vehicle";

export class VehicleService {
  constructor(private readonly vehicleRepository: IVehicleRepository) {}

  async createVehicle(data: CreateVehicleDto) {
    const vehicleExists = await this.vehicleRepository.findById(data.id);

    if (vehicleExists) {
      throw new Error("Vehicle alerady exists");
    }

    const vehicle = new Vehicle(data);

    await this.vehicleRepository.save(vehicle);
  }
}
