import { TestBed } from '@angular/core/testing';
import { JalaliTimePipe } from './jalali-time.pipe';
import { makeDependecy } from '@shared/spec/MockDependencies';
import { jalaliTimeRegex } from '@shared/validations/regex/regex';

fdescribe('JalaliTimePipe', () => {
  let pipe: JalaliTimePipe;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
      providers: [
        JalaliTimePipe
      ]
    });
    pipe = makeDependecy(JalaliTimePipe);
  });

  it('#1__create an instance', () => {
    expect(pipe).toBeDefined();
  });

  it('#2__transform jalali time', () => {
    expect(pipe.transform(new Date)).toMatch(jalaliTimeRegex);
    expect(pipe.transform(new Date)).not.toMatch("^[0-9]{2}\:[0-9]{1}\:[0-9]{2}$");
  });

  it('#3__transform jalali time', () => {
    expect(pipe.transform('0001-01-01T00:00:00')).toBe('');
  });

  it('#4__transform jalali time', () => {
    expect(pipe.transform('0622-03-21')).toEqual('');
    expect(pipe.transform('0622-03-22')).toEqual('');
  });

  it('#5__transform jalali time', () => {
    expect(pipe.transform('0622-03-21')).toBeInstanceOf(String);
    expect(pipe.transform(new Date)).toBeInstanceOf(String);
  });

});
