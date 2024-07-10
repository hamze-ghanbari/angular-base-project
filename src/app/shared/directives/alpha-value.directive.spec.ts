import { TestBed } from '@angular/core/testing';
import { AlphaValueDirective } from './alpha-value.directive';

describe('AlphaValueDirective', () => {
  it('should create an instance', () => {
    const directive = TestBed.inject(AlphaValueDirective);
    expect(directive).toBeTruthy();
  });
});
