import { CanActivateFn, Route, Router } from '@angular/router';
import { UserService } from '@core/services/http-service/user.service';
import { getInstance } from '@core/utils/injector';

export const tokenGuard: CanActivateFn = (route, state) => {
  const instance = getInstance([UserService, Router]);
  return !instance.userservice.userAccessToken() ? true : instance.router.navigate(['/dashboard']);
};
