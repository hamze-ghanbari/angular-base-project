import { Inject, InjectionToken } from '@angular/core';
import { LocalRepository } from './local-repository';
import { TestBed } from '@angular/core/testing';

describe('LocalRepository', () => {
  it('should create an instance', () => {
    expect(TestBed.inject(LocalRepository)).toBeTruthy();
  });
  
});
