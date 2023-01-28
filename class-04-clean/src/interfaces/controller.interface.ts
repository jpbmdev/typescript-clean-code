import { HttpRequest, HttpResponse } from "./http.interface";

export interface IController {
  handle: (HttpRequest: HttpRequest) => Promise<HttpResponse>;
}
