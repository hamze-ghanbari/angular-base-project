import { Inject, InjectionToken } from '@angular/core';
import { LocalRepository } from './local-repository';

describe('LocalRepository', () => {
  it('should create an instance', () => {
    expect(new LocalRepository(new InjectionToken<Object>(''))).toBeTruthy();
  });
});
