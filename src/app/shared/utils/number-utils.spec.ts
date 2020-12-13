import { TestSource } from "jasmine-data-provider-ts";
import { NumberUtils } from "./number-utils";

interface TestCase {
  value: number;
  roundValue: number;
}

describe('NumberUtils', () => {

  function provider(): TestCase[] {
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

  TestSource<TestCase>(provider, (data) => {
    it(`should round 2 decimal ${data.value} to ${data.roundValue}`, () => {
      expect(NumberUtils.round2(data.value)).toEqual(data.roundValue);
    });
  });
});
