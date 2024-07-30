import { Inject, Injectable } from '@angular/core';
import { HttpProxyService } from '../proxy-service/http-proxy.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '@environments';
import { LocalRepository } from '@core/utils/local-repository';
import { APP_CONFIGS } from '@core/tokens/tokens';
import { indexType } from '@core/models/types';
import { Router } from '@angular/router';
import { ILogin } from '@core/models/interfaces/login.interface';
import { IServiceResult } from '@core/models/interfaces/service-result.interface';
import { IUser } from '@core/models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpProxyService {
  constructor(
    protected override http: HttpClient,
    private repository: LocalRepository,
    @Inject(APP_CONFIGS) private config: indexType,
    private router: Router
  ) {
    super(http);
    this.setBaseUrl(environment.AUTH_URL);
  }

  login(phoneNumber: string): Observable<IServiceResult<any>> {
    // this.setBaseUrl(environment.AUTH_URL);
    return this.post<IServiceResult<any>>('login', { user_name: phoneNumber });
  }

  confirm(phoneNumber: string, confirmCode: number): Observable<IServiceResult<ILogin>> {
    return this.post<IServiceResult<ILogin>>('confirm', { user_name: phoneNumber, confirm_code: confirmCode }).pipe(
      map(res => {
        if (res?.result?.accessToken) {
          this.repository.setItem(this.config['accessTokenKey'], res.result.accessToken);
          this.repository.setItemAs<IUser>(this.config['userInfoKey'], res?.result?.user);
          // this.repository.setItem(EXPIRE_IN_KEY, res.result.expires_in.toString());
          // this.repository.setItem(this.config['refreshTokenKey'], res.result.refresh_token);
        }
        return res;
      })
    );
  }

  resendOtpCode(phoneNumber: string): Observable<IServiceResult<any>> {
    // this.setBaseUrl(environment.AUTH_URL);
    return this.post<IServiceResult<any>>('resendCode', { user_name: phoneNumber });
  }


  //? Refresh Token
  public refreshToken(): Observable<IServiceResult<ILogin>> {
    const rft = this.repository.getItem(this.config['refreshTokenKey']);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    }
    const data = `client_id=api.angular.seller.client&client_secret=secret&grant_type=refresh_token&refresh_token=${rft}`;
    return this.post<IServiceResult<ILogin>>(`${environment.AUTH_URL}/connect/token`, data, httpOptions).pipe(
      map(res => {
        if (res?.result?.accessToken) {
          this.repository.setItem(this.config['accessTokenKey'], res.result.accessToken);
          this.repository.setItemAs<IUser>(this.config['userInfoKey'], res?.result?.user);
          // this.repository.setItem(EXPIRE_IN_KEY, result.expires_in.toString());
          // this.repository.setItem(this.config['refreshTokenKey'], result.refresh_token);
        }
        else {
          this.logout();
        }
        return res;
      }),
    );
  }

  logout() {

    // http request logout this lines down into the subscibre after successfully response loggedout
    this.repository.removeItem(this.config['accessTokenKey']);
    // this.repository.remove(EXPIRE_IN_KEY);
    this.repository.removeItem(this.config['refreshTokenKey']);
    this.repository.removeItem(this.config['userInfoKey']);
    // BaseComponent.currentUser = new TokenModel();
    this.router.navigate(['/login']);
  }


}
