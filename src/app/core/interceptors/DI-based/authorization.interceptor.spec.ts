import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpInterceptorFn, HttpRequest, provideHttpClient } from '@angular/common/http';

import { AuthorizationInterceptor } from './authorization.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { createSpyObject, createSpyOn } from '@core/spec/MockDependencies';
import { Observable } from 'rxjs/internal/Observable';

describe('authorizationInterceptor', () => {
    // let httpService: HttpService;
    let httpMock: HttpTestingController;
    let interceptor: AuthorizationInterceptor;
  
    beforeEach(()=> {
      TestBed.configureTestingModule({
        // imports: [HttpClientTestingModule],
        providers: [
            provideHttpClient(),
            provideHttpClientTesting(),
        //  HttpService,
         {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
        ]
      });
    //   httpService = TestBed.get(HttpService);
      httpMock = TestBed.inject(HttpTestingController);
      interceptor = TestBed.inject(AuthorizationInterceptor);
    });

  it('should be created', () => {
    const next: any = {
        handle: () => {
          return Observable.create((subscriber: any) => {
            subscriber.complete();
          });
        }
      };
    // expect(interceptor).toBeTruthy();
    const requestMock = createSpyOn(HttpRequest, ['GET']);

interceptor.intercept(requestMock as HttpRequest<any>, next).subscribe(() => {
  expect(interceptor.intercept).toBeGreaterThan(0);
});
  });
});
