import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { httpOptions } from '@core/models/types/http-options';
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
