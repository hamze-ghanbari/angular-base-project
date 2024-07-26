import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpInterceptorFn, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';

import { offlineModeInterceptor } from './offline-mode.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { createSpyObject, createSpyOnByReturn } from '@core/spec/MockDependencies';

describe('offlineModeInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => offlineModeInterceptor(req, next));
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  // let spy = createSpyOnByReturn(window, 'navigator', {
  //   onLine : false
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([offlineModeInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  // afterEach(() => {
  //   httpTestingController.verify();
  // });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('#2__', () => {


       //arrange
      //  const url = '/test';

      //  //act
      //  httpClient.get(url).subscribe();
   
      //  // assert
      //  const req = httpTestingController.expectOne(url);
      //  expect(req.request.body).toBeInstanceOf(HttpResponse);
      //  expect(req.request.body).toEqual(HttpResponse);
     });

});
