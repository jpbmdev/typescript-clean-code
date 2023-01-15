import { IBird } from "../interfaces/ibirds";

export class Bird {
  constructor(public ibird: IBird) {
    Object.assign(this, ibird);
  }

  fly() {
    return this.ibird.name;
  }
}

export class Eagle extends Bird {
  fly() {
    return this.ibird.name;
  }
}

// THIS IS BAD
export class Penguin extends Bird {
  fly(): any {
    return new Error("I cant Fly");
  }

  walk() {
    return "I can Walk";
  }
}
