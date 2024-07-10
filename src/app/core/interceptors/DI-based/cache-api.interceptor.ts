import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CACHING_ENABLED, EXPIRE_CACHE } from '@core/tokens/tokens';
import { cacheDataType } from '@core/models/types/cache-data';

@Injectable()

export class cacheApiInterceptor implements HttpInterceptor {
  cache = new Map<string, cacheDataType>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    let timeNow = new Date().getTime();

    if (req.context.get(CACHING_ENABLED)) {
      if (this.cache.has(req.url)) {
        if (this.cache.get(req.url)!.expire > timeNow) {
          let cacheData = this.cache.get(req.url)?.response;
          return of(cacheData);
        } else {
          return this.cacheApiResponse(req, next);
        }

      } else {
        return this.cacheApiResponse(req, next);
      }
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
          return of(new HttpResponse({
            body : 'client closed request',
            status: 499
          }))
        }

        // ...optionally return a default fallback value so app can continue (pick one)
        // which could be a default value
        // return Observable.of<any>({my: "default value..."});
        // or simply an empty observable
        return of(EMPTY);
      })
    );
  }

  cacheApiResponse(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.cache.set(req.url, {
            response: response,
            expire: req.context.get(EXPIRE_CACHE)
          });
        }
      })
    );
  }
}
