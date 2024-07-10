import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { timeOutInterceptor } from './time-out.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('timeOutInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => timeOutInterceptor(req, next));
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([timeOutInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('#2__', () => {
 //arrange
 const url = 'https://api.github.com/users';

 //act
 httpClient.get(url).subscribe(res => {
  //  tick(150);
  expect(res).toEqual('');
  // flush();
 });

 // assert
 const req = httpTestingController.expectOne(url);
// //  expect(req.request.headers.get('Authorization')).toEqual('');
//  expect(req.request.body).toEqual('');
  });
});
