import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../constants/config';
import { indexType } from '@core/models/types';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: indexType;

  constructor(
  ) {
  this.appConfig = APP_CONFIG;
  }

    get config(): indexType {
    if (!this.appConfig) {
      console.error('Config file not loaded!');
      // throw Error('Config file not loaded!');
    }

    return this.appConfig;
  }
}
