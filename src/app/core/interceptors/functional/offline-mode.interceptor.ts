import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export const offlineModeInterceptor: HttpInterceptorFn = (req, next): Observable<any> => {
   if (!window.navigator.onLine) {
    return of(new HttpErrorResponse({ status: 0, statusText: 'Offline' }));
  }
  return next(req);
};
