import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { WindowRepository } from '@core/utils/window-repository';
import { Observable, of } from 'rxjs';

export const offlineModeInterceptor: HttpInterceptorFn = (req, next): Observable<any> => {
  let windowRepository : WindowRepository = inject(WindowRepository);
   if (!windowRepository.isOnline()) {
    return of(new HttpErrorResponse({ status: 0, statusText: 'Offline' }));
  }
  return next(req);
};
