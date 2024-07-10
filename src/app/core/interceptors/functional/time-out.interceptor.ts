import { HttpInterceptorFn } from '@angular/common/http';
import { TIME_OUT } from '@core/tokens/tokens';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

export const timeOutInterceptor: HttpInterceptorFn = (req, next): Observable<any> => {
  const timeoutDuration = req.context.get(TIME_OUT); // 10 seconds

  return next(req).pipe(
    timeout(timeoutDuration)
  );
};
