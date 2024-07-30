import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, concatMap, filter, of, switchMap, take, throwError } from 'rxjs';
import { SnackbarProxyService } from '@core/services/proxy-service/snackbar-proxy.service';
import { UserService } from '@core/services/http-service/user.service';
import { LoginService } from '@core/services/http-service/login.service';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthorizationInterceptor implements HttpInterceptor {
  token: string;
  expireIn: any;
  refreshToken: string;
  private isRefreshing: boolean = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(
    private _snackBar: SnackbarProxyService,
    private userService: UserService,
    private loginService: LoginService
  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // let clone = request.clone({
      //   url : request.url.substring(0, request.url.lastIndexOf('/'))
      // })
    return this.handleAuth(request).pipe(concatMap(req => next.handle(request)), catchError(error => {
      return this.handleError(request, next, error)
    }));
  }

  private handleAuth(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    return of(this.addTokenToRequest(request, this.userService.userAccessToken()));
  }

  private handleError(req: HttpRequest<any>, next: HttpHandler, errorResponse: any): Observable<HttpEvent<any>> {
    if (errorResponse instanceof HttpErrorResponse) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);
        return this.loginService.refreshToken().pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.access_token);
            return next.handle(this.addTokenToRequest(req, token.access_token));
          }));

      } else {
        return this.refreshTokenSubject.pipe(
          filter(token => token != null),
          take(1),
          switchMap(token => {
            return next.handle(this.addTokenToRequest(req, token));
          }));
      }
    }
    return throwError(errorResponse);
  }

  redirectToLogin() {
    // if (this.signinService.IsInBrowser) {
    this._snackBar.open('لطفا مجددا وارد شوید', undefined, {
      panelClass: 'snack-error'
    });
    // }
  }

  addTokenToRequest(request: HttpRequest<any>, accessToken: string | undefined | null): HttpRequest<any> {
    if (!accessToken) {
      return request;
    }
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

}
