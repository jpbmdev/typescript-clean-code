import { IContract } from "../interfaces/icontract";

export class ContractModel {
  constructor(public contract: IContract) {}

  getId(): string {
    return this.contract.id;
  }

  getDateInit(): Date {
    return this.contract.dateInit;
  }

  getExpirationDate(): Date {
    return this.contract.expirationDate;
  }

  getMonth(): number {
    return this.contract.month;
  }

  getmonthlyCost(): number {
    return this.contract.monthlyCost;
  }
}

export class ContractPrime extends ContractModel {
  monthlyDiscount(): number {
    return this.contract.monthlyCost * 0.1;
  }
}
