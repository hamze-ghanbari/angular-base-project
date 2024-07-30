import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { httpOptions } from '@core/models/types/http-options';
import { untilDestroyed } from '@core/operators/until';
import { API_URL } from '@core/tokens/tokens';
import { EMPTY, Observable, catchError, map, of, takeUntil, tap, throwError } from 'rxjs';
import { SnackbarProxyService } from './snackbar-proxy.service';
import { isObject } from '@core/utils/utils';

@Injectable()
export abstract class HttpProxyService {

  private baseUrl: string = inject(API_URL);
  protected readonly destroyRef: DestroyRef = inject(DestroyRef);
  private _snackBar: SnackbarProxyService = inject(SnackbarProxyService);
  constructor(
    protected http: HttpClient
  ) { 
  }

  setBaseUrl(url: string):void{
    this.baseUrl = url;
  }

   protected get<T>(url: string, options?: httpOptions): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),
      tap(res => {
        if(res.hasError && res.status == 200){
          this._snackBar.open(res.message, 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

  protected post<T>(url: string, body: any, options?: httpOptions): Observable<T>{
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),
      tap(res => {
        if(res.hasError && (res.status == 400 || res.status == 200)){
          this._snackBar.open(!isObject(res.message) ? res.message : res.message[Object.keys(res.message)[0]][0] , 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

  protected put<T>(url: string, body: any | null, options?: httpOptions): Observable<T>{
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),tap(res => {
        if(res.hasError && (res.status == 400 || res.status == 200)){
          this._snackBar.open(!isObject(res.message) ? res.message : res.message[Object.keys(res.message)[0]][0] , 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

  protected delete<T>(url: string, options?: httpOptions): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),tap(res => {
        if(res.hasError && res.status == 200){
          this._snackBar.open(res.message, 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

  protected head<T>(url: string, options?: httpOptions): Observable<T> {
    return this.http.head<T>(`${this.baseUrl}/${url}`, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),tap(res => {
        if(res.hasError && res.status == 200){
          this._snackBar.open(res.message, 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

  protected patch<T>(url: string, body: any | null, options?: httpOptions): Observable<T>{
    return this.http.patch<T>(`${this.baseUrl}/${url}`, body, {observe: 'body', responseType: 'json', ...options} as any).pipe(
      catchError(error => of(error)),tap(res => {
        if(res.hasError && (res.status == 400 || res.status == 200)){
          this._snackBar.open(!isObject(res.message) ? res.message : res.message[Object.keys(res.message)[0]][0] , 'X', {
            panelClass: 'snack-error'
          });
        }
      }),
      takeUntil(untilDestroyed(this.destroyRef))
    );
  }

}
