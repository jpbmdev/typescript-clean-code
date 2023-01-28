import mongoose from "mongoose";

export const VehicleSchema = new mongoose.Schema({
  name: { type: String },
  model: { type: String },
  year: { type: String },
  color: { type: String },
});

export class VehicleModel {
  name: string;
  model: string;
  year: string;
  color: string;
}
