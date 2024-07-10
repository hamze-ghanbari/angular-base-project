import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: any;

  constructor(
  ) {
  this.appConfig = APP_CONFIG;
  }

    get config() {
    if (!this.appConfig) {
      console.error('Config file not loaded!');
      // throw Error('Config file not loaded!');
    }

    return this.appConfig;
  }
}
