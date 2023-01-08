// eslint-disable-next-line n/no-deprecated-api
import { UrlWithParsedQuery, parse } from "url";
import { InvalidArgument } from "../errors/invalid-arg.error";

export class UrlLogin {
  public static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) {
      throw new InvalidArgument(url);
    }
    return parse(url, true);
  }
}
