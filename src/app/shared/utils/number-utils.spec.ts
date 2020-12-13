import { TestSource } from "jasmine-data-provider-ts";
import { NumberUtils } from "./number-utils";

interface TwoDecimalTestCase {
  value: number;
  roundValue: number;
}

interface OverdraftTestCase {
  amount: number;
  balance: number;
  maxOverdraft: number;
  isOverdraft: boolean;
}

describe('NumberUtils test 2 decimal', () => {

  function provider(): TwoDecimalTestCase[] {
    return [
      { value: 0.055, roundValue: 0.06 },
      { value: 0.054, roundValue: 0.05 },
      { value: 1.22, roundValue: 1.22 },
      { value: 1.2, roundValue: 1.2 },
      { value: 1.223, roundValue: 1.22 },
      { value: 1.224, roundValue: 1.22 },
      { value: 1.225, roundValue: 1.23 },
      { value: 1.226, roundValue: 1.23 },
    ];
  }

  TestSource<TwoDecimalTestCase>(provider, (data) => {
    it(`should round ${data.value} to ${data.roundValue}`, () => {
      expect(NumberUtils.round2(data.value)).toEqual(data.roundValue);
    });
  });
});

describe('NumberUtils test balance overdraft', () => {

  function provider(): OverdraftTestCase[] {
    return [
      { amount: 1, balance: 1000, maxOverdraft: -500, isOverdraft: false },
      { amount: 1000, balance: 1000, maxOverdraft: -500, isOverdraft: false },
      { amount: 1400, balance: 1000, maxOverdraft: -500, isOverdraft: false },
      { amount: 1500, balance: 1000, maxOverdraft: -500, isOverdraft: false },
      { amount: 1501, balance: 1000, maxOverdraft: -500, isOverdraft: true },
      { amount: 1500.01, balance: 1000, maxOverdraft: -500, isOverdraft: true },
      { amount: 700, balance: 1000, maxOverdraft: 200, isOverdraft: false },
      { amount: 800, balance: 1000, maxOverdraft: 200, isOverdraft: false },
      { amount: 900, balance: 1000, maxOverdraft: 200, isOverdraft: true },
    ];
  }

  TestSource<OverdraftTestCase>(provider, (data) => {
    it(`should return ${data.isOverdraft} when tranferAmount = ${data.amount}, balance = ${data.balance}, maxOverdraft = ${data.maxOverdraft}`, () => {
      expect(NumberUtils.balanceOverdraft(data.amount, data.balance, data.maxOverdraft)).toBe(data.isOverdraft);
    });
  });
});
