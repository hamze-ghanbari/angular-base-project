import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ConfigService } from './core/services/helper-service/config.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { API_URL } from '@core/tokens/tokens';
import { environment } from '../environments/environment.development';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { catcheErrorInterceptor } from '@core/interceptors/DI-based/catch-error.interceptor';
import { AuthorizationInterceptor } from '@core/interceptors/DI-based/authorization.interceptor';
import { cacheApiInterceptor } from '@core/interceptors/DI-based/cache-api.interceptor';
import { offlineModeInterceptor } from '@core/interceptors/functional/offline-mode.interceptor';
import { timeOutInterceptor } from '@core/interceptors/functional/time-out.interceptor';
import { tap } from 'rxjs/operators';

export function appCongifService(){
  return () =>  new ConfigService();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      //  withComponentInputBinding()
      ),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([offlineModeInterceptor, timeOutInterceptor])
    ),
    provideAnimationsAsync(),
    // provideAnimations(),
    provideCharts(withDefaultRegisterables()),
    {provide: APP_INITIALIZER, useFactory: appCongifService, multi: true},
    {provide : API_URL, useValue: environment.API_URL},
    {provide : HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass: cacheApiInterceptor, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass: catcheErrorInterceptor, multi: true},
  ]
};
