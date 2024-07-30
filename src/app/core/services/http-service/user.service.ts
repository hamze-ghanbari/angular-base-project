import { Injectable } from '@angular/core';
import { LocalRepository } from '@core/utils/local-repository';
import { ConfigService } from '../helper-service/config.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNull, parseJson } from '@core/utils/utils';
import { IUser } from '@core/models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jwt: JwtHelperService = new JwtHelperService();;

  constructor(
    private localRepository: LocalRepository,
    private configService: ConfigService,
  ) { }

  addUserAccessToken(token: string): void {
    this.localRepository.setItem(this.configService.config['accessTokenKey'], token);
  }

  addUserRefreshToken(token: string): void {
    this.localRepository.setItem(this.configService.config['refreshTokenKey'], token);
  }

  userAccessToken(): string | undefined {
    return this.localRepository.getItem(this.configService.config['accessTokenKey']);
  }

  userRefreshToken(): string | undefined {
    return this.localRepository.getItem(this.configService.config['refreshTokenKey']);
  }

  get userInfo(): IUser | null {
    let user = this.localRepository.getItem(this.configService.config['userInfoKey']);
    return user ? parseJson<IUser>(user) : null;
  }

  get userRoles(): string[] {
    return isNull(this.userInfo) ? [] : this.userInfo.roles;
  }

  get userPermissions(): string[] {
    return isNull(this.userInfo) ? [] : this.userInfo.permissions;
  }

  get userLoggedIn(): boolean {
    return isNull(this.userInfo) ? false : true;
  }

  tokenInfo(): { expire_token_date: Date | null, is_expire_token: boolean } {
    return {
      expire_token_date: this.jwt.getTokenExpirationDate(this.userAccessToken() ?? '') as Date,
      is_expire_token: this.jwt.isTokenExpired(this.userAccessToken() ?? '') as boolean,
    };
  }


}
