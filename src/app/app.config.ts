import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ConfigService } from './core/services/helper-service/config.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { API_URL, APP_CONFIGS, ERROR_MESSAGES } from '@core/tokens/tokens';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { catcheErrorInterceptor } from '@core/interceptors/DI-based/catch-error.interceptor';
import { AuthorizationInterceptor } from '@core/interceptors/DI-based/authorization.interceptor';
import { cacheApiInterceptor } from '@core/interceptors/DI-based/cache-api.interceptor';
import { offlineModeInterceptor } from '@core/interceptors/functional/offline-mode.interceptor';
import { timeOutInterceptor } from '@core/interceptors/functional/time-out.interceptor';
import { tap } from 'rxjs/operators';
import { environment } from '@environments';
import { SyncCache } from '@core/caches/sync-cache';
import { RoutePreloadingStrategy } from '@core/strategies/preloading.strategy';
import { APP_CONFIG } from '@core/constants/config';
import { MESSAGES } from '@core/constants/messages';
import { HeaderComponent } from '@core/shell/header/header.component';
import { FooterComponent } from '@core/shell/footer/footer.component';
import { NotFoundComponent } from '@core/shell/not-found/not-found.component';
import { ForbiddenComponent } from '@core/shell/forbidden/forbidden.component';

export function appCongifService() {
  return () => new ConfigService();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES,
       withComponentInputBinding(),
      withPreloading(RoutePreloadingStrategy)
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
      //************8 */ optional interceptors
      withInterceptors([offlineModeInterceptor, timeOutInterceptor])
    ),
    provideAnimationsAsync(),
    // importProvidersFrom([
    //   HeaderComponent, // should not be standalone
    //   FooterComponent, // should not be standalone
    //   // NotFoundComponent, // No need to import the page 
    //   // ForbiddenComponent // No need to import the page
    // ]),
    // provideAnimations(),
    { provide: APP_INITIALIZER, useFactory: appCongifService, multi: true },
    { provide: API_URL, useValue: environment.API_URL },
    { provide: APP_CONFIGS, useValue: APP_CONFIG },
    { provide: ERROR_MESSAGES, useValue: MESSAGES['VALIDATIONS'] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: cacheApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: catcheErrorInterceptor, multi: true },
    { provide: SyncCache, useClass: SyncCache }
  ]
};
