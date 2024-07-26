import { TestBed } from '@angular/core/testing';
import { makeDependecy } from '@core/spec/MockDependencies';
import { TomanPipe } from './toman.pipe';

fdescribe('TomanPipe', () => {
  let pipe: TomanPipe;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TomanPipe      ]
    });
    pipe = makeDependecy(TomanPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('#2__transform toman', () => {
    expect(pipe.transform('200')).toBe(20);
    expect(pipe.transform(200)).toBe(20);
  });

  it('#3__transform toman', () => {
    expect(pipe.transform('79')).toBe(7);
    expect(pipe.transform(0)).toBe(0);
    expect(pipe.transform('0')).toBe(0);
  });

});
