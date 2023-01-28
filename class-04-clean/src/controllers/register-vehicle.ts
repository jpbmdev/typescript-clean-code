import { AddAccount } from "../domain/useCases/add-account";
import { MissingFormalParameter } from "../errors/client.error";
import { badRequest, serverError, success } from "../helpers/http.helper";
import { IController } from "../interfaces/controller.interface";
import { HttpRequest, HttpResponse } from "../interfaces/http.interface";

export class RegisterVehicle implements IController {
  constructor(private readonly addAcount: AddAccount) {
    this.addAcount = addAcount;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ["name", "model", "year", "color", "email"];

      for (const requiredProperty of requiredProperties) {
        if (!httpRequest?.body?.[requiredProperty]) {
          return badRequest(new MissingFormalParameter(requiredProperty));
        }
      }

      const { name, model, year, color, email } = httpRequest.body;
      const vehicle = await this.addAcount.add({
        name,
        model,
        year,
        color,
        email,
      });

      return success(vehicle);
    } catch (error) {
      return serverError(error);
    }
  }
}
