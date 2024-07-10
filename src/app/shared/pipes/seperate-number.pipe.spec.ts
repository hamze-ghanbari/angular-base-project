import { TestBed } from '@angular/core/testing';
import { SeperateNumberPipe } from './seperate-number.pipe';
import { makeDependecy } from '@shared/spec/MockDependencies';
import { indexType } from '@core/models/types';

describe('SeperateNumberPipe', () => {
  let pipe: SeperateNumberPipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SeperateNumberPipe      ]
    });
    pipe = makeDependecy(SeperateNumberPipe);
  });

  it('#1__create an instance', () => {
    expect(pipe).toBeDefined();
  });

  it('#2__transform number', () => {
    expect(pipe.transform('200')).toBe('200');
    expect(pipe.transform(200)).toBe('200');
  });

  it('#3__transform number', () => {
    expect(pipe.transform('2000')).toBe('2,000');
    expect(pipe.transform(2000)).toBe('2,000');
  });

  it('#4__transform number', () => {
    expect(pipe.transform('200078888')).toBe('200,078,888');
    expect(pipe.transform(200078888)).toBe('200,078,888');
  });

  it('#5__transform number', () => {
    expect(pipe.transform('2000')).toBeInstanceOf(String);
    expect(pipe.transform(2000)).toBeInstanceOf(String);
  });
});
