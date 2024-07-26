import { TestBed } from '@angular/core/testing';
import { HttpProxyService } from './http-proxy.service';
import { httpClientMock, makeDependecy } from '@core/spec/MockDependencies';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { API_URL } from '@core/tokens/tokens';
import { Observable, of } from 'rxjs';
import { environment } from '@environments';

fdescribe('HttpProxyService', () => {
  let service: HttpProxyService;
  let httpClientSpy = httpClientMock();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        },
        { provide: API_URL, useValue: environment.API_URL }
      ]
    });
    service = makeDependecy(HttpProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#2__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.get.and.returnValue(response);

    (service as any).get('users').subscribe((res : Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith('https://api.github.com/users', { observe: 'body', responseType: 'json' });
  });

  it('#3__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.get.and.returnValue(response);

    (service as any).get('users', {
      observe: 'events',
      headers: { key: 'value' }
    }).subscribe((res: Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith('https://api.github.com/users', { observe: 'events', responseType: 'json', headers: { key: 'value' } });
  });

  it('#4__', () => {
    httpClientSpy.get.and.returnValue(of(new HttpErrorResponse({
      error: 'error message',
      status: 404,
    })));

    (service as any).get('users').subscribe((res: HttpErrorResponse) => {
      expect(res).toBeInstanceOf(HttpErrorResponse);
      expect(res.status).toBe(404);
      expect(res.error).toBe('error message');
    });
  });

  it('#5__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.post.and.returnValue(response);

    (service as any).post('users').subscribe((res : Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.post).toHaveBeenCalledWith('https://api.github.com/users', undefined, { observe: 'body', responseType: 'json' });
  });

  it('#6__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.post.and.returnValue(response);

    (service as any).post('users', {name: 'userName', age: 20}, {
      observe: 'events',
      headers: { key: 'value' }
    }).subscribe((res: Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.post).toHaveBeenCalledWith('https://api.github.com/users', {name: 'userName', age: 20}, { observe: 'events', responseType: 'json', headers: { key: 'value' } });
  });

  it('#7__', () => {
    httpClientSpy.post.and.returnValue(of(new HttpErrorResponse({
      error: 'error message',
      status: 404,
    })));

    (service as any).post('users').subscribe((res: HttpErrorResponse) => {
      expect(res).toBeInstanceOf(HttpErrorResponse);
      expect(res.status).toBe(404);
      expect(res.error).toBe('error message');
    });
  });

  it('#8__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.put.and.returnValue(response);

    (service as any).put('users').subscribe((res : Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.put).toHaveBeenCalledWith('https://api.github.com/users', undefined, { observe: 'body', responseType: 'json' });
  });

  it('#9__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.put.and.returnValue(response);

    (service as any).put('users', {name: 'userName', age: 20}, {
      observe: 'events',
      headers: { key: 'value' }
    }).subscribe((res: Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.put).toHaveBeenCalledWith('https://api.github.com/users', {name: 'userName', age: 20}, { observe: 'events', responseType: 'json', headers: { key: 'value' } });
  });

  it('#10__', () => {
    httpClientSpy.put.and.returnValue(of(new HttpErrorResponse({
      error: 'error message',
      status: 404,
    })));

    (service as any).put('users').subscribe((res: HttpErrorResponse) => {
      expect(res).toBeInstanceOf(HttpErrorResponse);
      expect(res.status).toBe(404);
      expect(res.error).toBe('error message');
    });
  });

  
  it('#11__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.delete.and.returnValue(response);
    let userId = 50;
    (service as any).delete(`users/${userId}`).subscribe((res : Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.delete).toHaveBeenCalledWith(`https://api.github.com/users/${userId}`, { observe: 'body', responseType: 'json' });
  });

  it('#12__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.delete.and.returnValue(response);
    let userId = 50;
    (service as any).delete(`users/${userId}`, {
      observe: 'events',
      headers: { key: 'value' }
    }).subscribe((res: Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.delete).toHaveBeenCalledWith(`https://api.github.com/users/${userId}`, { observe: 'events', responseType: 'json', headers: { key: 'value' } });
  });

  it('#13__', () => {
    httpClientSpy.delete.and.returnValue(of(new HttpErrorResponse({
      error: 'error message',
      status: 404,
    })));
    let userId = 50;
    (service as any).delete(`users/${userId}`).subscribe((res: HttpErrorResponse) => {
      expect(res).toBeInstanceOf(HttpErrorResponse);
      expect(res.status).toBe(404);
      expect(res.error).toBe('error message');
    });
  });

  it('#14__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.patch.and.returnValue(response);

    (service as any).patch('users').subscribe((res : Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.patch).toHaveBeenCalledWith('https://api.github.com/users', undefined, { observe: 'body', responseType: 'json' });
  });

  it('#15__', () => {
    let response: Observable<any> = of({});
    httpClientSpy.patch.and.returnValue(response);

    (service as any).patch('users', {name: 'userName', age: 20}, {
      observe: 'events',
      headers: { key: 'value' }
    }).subscribe((res: Observable<any>) => {
      expect(res).toBeInstanceOf(Object);
    });

    expect(httpClientSpy.patch).toHaveBeenCalledWith('https://api.github.com/users', {name: 'userName', age: 20}, { observe: 'events', responseType: 'json', headers: { key: 'value' } });
  });

  it('#16__', () => {
    httpClientSpy.patch.and.returnValue(of(new HttpErrorResponse({
      error: 'error message',
      status: 404,
    })));

    (service as any).patch('users').subscribe((res: HttpErrorResponse) => {
      expect(res).toBeInstanceOf(HttpErrorResponse);
      expect(res.status).toBe(404);
      expect(res.error).toBe('error message');
    });
  });

});
