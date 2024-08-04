import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { UserService } from '@core/services/http-service/user.service';
import { getInstance } from '@core/utils/injector';

export const authenticationGuard: CanActivateFn = (route, state) => {
  // const instance = getInstance([UserService, Router]);
  const userService : UserService = inject(UserService);
  const router : Router = inject(Router);
  return userService.userAccessToken() ? true : router.navigate(['/login']);
};
