import { TestBed } from '@angular/core/testing';

import { SnackbarProxyService } from './snackbar-proxy.service';

describe('SnackbarProxyService', () => {
  let service: SnackbarProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
