import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { MESSAGES } from '../../constants/messages';
import { Injectable } from '@angular/core';
import { SnackbarProxyService } from '@core/services/proxy-service/snackbar-proxy.service';

@Injectable()

export class catcheErrorInterceptor implements HttpInterceptor {

  constructor(
    private _snakcBar: SnackbarProxyService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            return handleError(error, this._snakcBar);
          }
          return throwError(error);
        }
      ))   
}
}
function handleError(error: HttpErrorResponse, snackbar: SnackbarProxyService): Observable<any> {

  switch (error.status) {
    case 0: 
    snackbar.open(MESSAGES['HTTP_CODES']['0'], 'X', {
      panelClass: 'snack-error'
    });
    return of(new HttpResponse({
      body: {
        hasError: true,
        message: MESSAGES['HTTP_CODES']['0'],
        result : null,
        status: error.status
      },
    }));
    case 400:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: error.error.message,
          result : null,
          status: error.status
        },
      }));
    // case 401:
    //   return of(new HttpResponse({
    //     body: {
    //       hasError: true,
    //       message: MESSAGES['HTTP_CODES']['401'],
    //       result : null
    //     },
    //     status: error.status
    //   }));
    case 403:
      snackbar.open(MESSAGES['HTTP_CODES']['403'], 'X', {
        panelClass: 'snack-error'
      });
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES['HTTP_CODES']['403'],
          result : null,
          status: error.status
        },
      }));
    case 404:
      snackbar.open(MESSAGES['HTTP_CODES']['404'], 'X', {
        panelClass: 'snack-error'
      });
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES['HTTP_CODES']['404'],
          result : null,
          status: error.status
        },
      }));
    case 500:
      snackbar.open(MESSAGES['HTTP_CODES']['500'], 'X', {
        panelClass: 'snack-error'
      });
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES['HTTP_CODES']['500'],
          result : null,
          status: error.status
        },
      }));
    case 502:
      snackbar.open(MESSAGES['HTTP_CODES']['502'], 'X', {
        panelClass: 'snack-error'
      });
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES['HTTP_CODES']['502'],
          result : null,
          status: error.status
        },
      }));
    case 504:
      snackbar.open(MESSAGES['HTTP_CODES']['504'], 'X', {
        panelClass: 'snack-error'
      });
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES['HTTP_CODES']['504'],
          result : null,
          status: error.status
        },
      }));
    default:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: error.message,
          result : null,
          status: error.status
        },
      }));
  }
}