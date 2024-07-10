import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { MESSAGES } from '../../constants/messages';

export class catcheErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            return handleError(error);
          }
          return throwError(error);
        }
      ))   
}
}
function handleError(error: HttpErrorResponse): Observable<any> {
  switch (error.status) {
    case 400:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['400'],
          result : null
        },
        status: error.status
      }));
    case 401:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['401'],
          result : null
        },
        status: error.status
      }));
    case 403:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['403'],
          result : null
        },
        status: error.status
      }));
    case 404:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['404'],
          result : null
        },
        status: error.status
      }));
    case 500:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['500'],
          result : null
        },
        status: error.status
      }));
    case 502:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['502'],
          result : null
        },
        status: error.status
      }));
    case 504:
      return of(new HttpResponse({
        body: {
          hasError: true,
          message: MESSAGES.HTTP_CODES['504'],
          result : null
        },
        status: error.status
      }));
    default:
      return throwError(error)
  }
}