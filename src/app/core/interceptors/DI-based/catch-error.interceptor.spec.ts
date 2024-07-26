import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';

import { catcheErrorInterceptor } from './catch-error.interceptor';
import { createSpyObject, createSpyOn, createSpyOnByReturn, httpClientMock, makeDependecy } from '@core/spec/MockDependencies';
import { of } from 'rxjs';

describe('cacheErrorInterceptor', () => {
  // const mockHandler = createSpyOnByReturn(catcheErrorInterceptor, 'handle', of(new HttpResponse({})));
    // let interceptor: catcheErrorInterceptor;
    // let httpClientSpy = httpClientMock();
  beforeEach(() => {
    TestBed.configureTestingModule({});
    // interceptor = makeDependecy(catcheErrorInterceptor);
  });

  it('should be created', () => {
    // interceptor.intercept(new HttpRequest('GET', 'https://api.github.com/users'), mockHandler).subscribe((res) => {
        // expect(mockHandler).toHaveBeenCalledWith('GET', 'https://api.github.com/users')
      // });
  });
});
