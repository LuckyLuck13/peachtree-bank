import { TestBed } from "@angular/core/testing";
import { TestSource } from "jasmine-data-provider-ts";
import { LogoPathPipe } from "./logo-path.pipe";

interface TestCase {
  value: string;
  expectedResult: string;
  extension: string
}

describe('LogoPathPipe', () => {
  let pipe: LogoPathPipe;
  const defaultPath = 'assets/icons';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LogoPathPipe]
    });
    pipe = TestBed.inject(LogoPathPipe);
  });

  function provider(): TestCase[] {
    return [
      { value: 'company', expectedResult: `${defaultPath}/company.png`, extension: '.png' },
      { value: 'xyz', expectedResult: `${defaultPath}/xyz.png`, extension: '.png' },
      { value: '123', expectedResult: `${defaultPath}/123.png`, extension: '.png' },
      { value: 'company', expectedResult: `${defaultPath}/company.jpg`, extension: '.jpg' },
      { value: 'company', expectedResult: `${defaultPath}/company.giff`, extension: '.giff' }
    ]
  }

  TestSource<TestCase>(provider, (data) => {
    it(`should return ${data.expectedResult} for merchant name '${data.value}' and extension '${data.extension}'`, () => {
      expect(pipe.transform(data.value, defaultPath + '/', data.extension)).toEqual(data.expectedResult);
    });
  })

});