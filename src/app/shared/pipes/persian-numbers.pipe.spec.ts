import { TestBed } from '@angular/core/testing';
import { PersianNumbersPipe } from './persian-numbers.pipe';
import { makeDependecy } from '@shared/spec/MockDependencies';

describe('PersianNumbersPipe', () => {
  let pipe: PersianNumbersPipe;
  beforeEach(async () => {
   await TestBed.configureTestingModule({
      providers: [
        PersianNumbersPipe
      ]
    });
    pipe = makeDependecy(PersianNumbersPipe);
  });

  
  it('1#__create an instance', () => {
    expect(pipe).toBeDefined();
  });

  it('2#__transform persian number 1', () => {
    expect(pipe.transform('0')).toBe('۰');
    expect(pipe.transform('0')).not.toBe('0');
    expect(pipe.transform('1')).toBe('۱');
    expect(pipe.transform('1')).not.toBe('1');
    expect(pipe.transform('2')).toBe('۲');
    expect(pipe.transform('2')).not.toBe('2');
    expect(pipe.transform('3')).toBe('۳');
    expect(pipe.transform('3')).not.toBe('3');
    expect(pipe.transform('4')).toBe('۴');
    expect(pipe.transform('4')).not.toBe('4');
    expect(pipe.transform('5')).toBe('۵');
    expect(pipe.transform('5')).not.toBe('5');
    expect(pipe.transform('6')).toBe('۶');
    expect(pipe.transform('6')).not.toBe('6');
    expect(pipe.transform('7')).toBe('۷');
    expect(pipe.transform('7')).not.toBe('7');
    expect(pipe.transform('8')).toBe('۸');
    expect(pipe.transform('8')).not.toBe('8');
    expect(pipe.transform('9')).toBe('۹');
    expect(pipe.transform('9')).not.toBe('9');
  });

  it('#3__transform persian number 2', () => {
    expect(pipe.transform('200')).toBe('۲۰۰');
    expect(pipe.transform('200')).not.toBe('200');
  });

  it('#4__transform persian number 3', () => {
    expect(pipe.transform('test200string')).toBe('test۲۰۰string');
  });

  it('#5__transform persian number 4', () => {
    expect(pipe.transform('200')).toBeInstanceOf(String);
  });

});
