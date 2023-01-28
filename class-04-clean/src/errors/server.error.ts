export class ServerError extends Error {
  constructor(stack: string | undefined) {
    super("Internal Error in the server");
    this.name = "Internal Error in the server";
    this.stack = stack;
  }
}
