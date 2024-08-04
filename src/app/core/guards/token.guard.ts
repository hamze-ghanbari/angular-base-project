import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { PwaService } from '@core/services/helper-service/pwa.service';
import { UserService } from '@core/services/http-service/user.service';
import { getInstance } from '@core/utils/injector';

export const tokenGuard: CanActivateFn = (route, state) => {
  // const instance = getInstance(UserService, Router, PwaService);
  const userService : UserService = inject(UserService);
  const router : Router = inject(Router);
  return !userService.userAccessToken() ? true : router.navigate(['/dashboard']);
};
