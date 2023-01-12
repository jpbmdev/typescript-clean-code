import { ContractModel, ContractPrime } from "../../models/contract.mode";

describe("Class ContractModel", () => {
  test("Contract regular 12 month", () => {
    const contract = new ContractModel({
      id: "1",
      dateInit: new Date(2020),
      expirationDate: new Date(2021),
      month: 12,
      monthlyCost: 500,
    });

    expect(contract.getId()).toBe("1");
    expect(contract.getDateInit()).toEqual(new Date(2020));
    expect(contract.getExpirationDate()).toEqual(new Date(2021));
    expect(contract.getMonth()).toBe(12);
    expect(contract.getmonthlyCost()).toBe(500);
  });

  test("Contract prime 24 month", () => {
    const contractPrime = new ContractPrime({
      id: "1",
      dateInit: new Date(2020),
      expirationDate: new Date(2021),
      month: 12,
      monthlyCost: 500,
    });

    expect(contractPrime.monthlyDiscount()).toBe(50);
  });
});
