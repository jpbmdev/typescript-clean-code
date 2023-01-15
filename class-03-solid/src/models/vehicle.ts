export class Vehicle {
  public id: string;
  public name: string;
  public description: string;

  constructor(props: Vehicle) {
    Object.assign(this, props);
  }
}
