import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@core/tokens/tokens';
import { EMPTY, Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpProxyService {

  private baseUrl: string = inject(API_URL);
  
  constructor(
    protected http: HttpClient
  ) { 
  }

   protected get(url: string, options?: httpOptions): Observable<any> {
    return this.http.get<Observable<any>>(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

  protected post(url: string, body: any, options?: httpOptions): Observable<any>{
    return this.http.post(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

  protected put(url: string, body: any | null, options?: httpOptions): Observable<any>{
    return this.http.put(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

  protected delete(url: string, options?: httpOptions): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

  protected head(url: string, options?: httpOptions): Observable<any> {
    return this.http.head(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

  protected patch(url: string, body: any | null, options?: httpOptions): Observable<any>{
    return this.http.patch(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error))
    );
  }

}

interface httpOptions {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  transferCache?: {
      includeHeaders?: string[];
  } | boolean;
}
 

// export abstract class HttpProxyService<T> {
//   private readonly APIUrl : string = inject(API_URL) + this.getResourceUrl();

//   constructor(protected httpClient: HttpClient ) {}

//   abstract getResourceUrl(): string;

//   toServerModel(entity: T | null): any {
//     return entity;
//   }

//   fromServerModel(json: any | null): T {
//     return json;
//   }

//   getList(index: number, page: number): Observable<T[]> {
//     let params = new HttpParams()
// 			.set('limit', index.toString())
// 			.set('offset', page.toString());

//     return this.httpClient.get<T[]>(`/${this.APIUrl}?${params.toString()}`)
//       .pipe(
//         map((list) => list.map((item)=> this.fromServerModel(item))),
//         catchError(this.handleError)
//       );
//   }

//   get(url: string, options: httpOptions): Observable<T> {
//     return this.httpClient.get<T>(`${this.APIUrl}/${url}`)
//       .pipe(
//         map((json) => this.fromServerModel(json)),
//         catchError(this.handleError)
//       );
//   }
  
//   post(url: string, body: T | null, options: httpOptions): Observable<any> {
//     return this.httpClient.post(`${this.APIUrl}/${url}`, this.toServerModel(body), options)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   delete(url: string): Observable<any> {
//     return this.httpClient.delete(`${this.APIUrl}/${url}`) 
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   update(url: string, body: T, options: httpOptions) {
//     return this.httpClient.put(`${this.APIUrl}/${url}`, this.toServerModel(body), options)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }
  
//   private handleError(error: HttpErrorResponse) {
//     // Handle the HTTP error here
//     return throwError('Something wrong happened');
//   }
// }