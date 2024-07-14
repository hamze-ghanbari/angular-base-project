import { TestBed } from '@angular/core/testing';
import { JalaliDatePipe } from './jalali-date.pipe';
import { makeDependecy } from '@shared/spec/MockDependencies';
import { jalaliDateRegex } from '@shared/validations/regex/regex';

fdescribe('JalaliPipe', () => {
  let pipe: JalaliDatePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [JalaliDatePipe]
    });
    pipe = makeDependecy(JalaliDatePipe);
  });

  it('#1__create an instance', () => {
    expect(pipe).toBeDefined();
  });

  it('#2__transform jalali date', () => {
    expect(pipe.transform(new Date)).toMatch(jalaliDateRegex);
  });

  it('#3__transform jalali date', () => {
    expect(pipe.transform('0001-01-01T00:00:00')).toBe('');
  });

  it('#4__transform jalali date', () => {
    expect(pipe.transform('0622-03-21')).toEqual('');
    expect(pipe.transform('0622-03-22')).not.toEqual('');
  });

  it('#5__transform jalali time', () => {
    expect(pipe.transform('0622-03-21')).toBeInstanceOf(String);
    expect(pipe.transform(new Date)).toBeInstanceOf(String);
  });

});
