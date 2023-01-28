export class MissingFormalParameter extends Error {
  constructor(public name: string) {
    super(`Error in the parameter: ${name}`);
    this.name = `Error in the parameter: ${name}`;
  }
}
