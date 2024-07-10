import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    let accessToken = 'aklsdfkj';
    // if(typeof Storage !== undefined){
    //  accessToken = localStorage.getItem('accessToken');
    // }
    let request = req.clone({
      setHeaders : {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return next.handle(request);
  }

}
