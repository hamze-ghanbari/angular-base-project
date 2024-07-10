import { Injectable } from '@angular/core';
import { LocalRepository } from '@core/utils/local-repository';
import { ConfigService } from '../helper-service/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private localRepository: LocalRepository,
    private configService: ConfigService
  ) { }

  addUserAccessToken(token: string){
    this.localRepository.setItem(this.configService.config.accessTokenKey, token);
  }

  addUserRefreshToken(token: string){
    this.localRepository.setItem(this.configService.config.refreshTokenKey, token);
  }

  userAccessToken(){
    return this.localRepository.getItem(this.configService.config.accessTokenKey);
  }

  userRefreshToken(){
    return this.localRepository.getItem(this.configService.config.refreshTokenKey);
  }

}
