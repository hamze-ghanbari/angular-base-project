import { TestBed, fakeAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { authenticationGuard } from './authentication.guard';
import { UserService } from '@core/services/http-service/user.service';
import { createSpyObject, createSpyOnByReturn } from '@shared/spec/MockDependencies';
import { Observable } from 'rxjs';

fdescribe('authenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authenticationGuard(...guardParameters));
  let spy = createSpyObject({
    Router: { methods: ['navigate'] }
  });
  // let instance: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: spy['Router'] }
      ]
    });
    // instance =  TestBed.runInInjectionContext(() => getInstance([UserService, Router]));

  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('#2__', fakeAsync(async () => {
    let userService: UserService = createSpyOnByReturn(UserService, 'userAccessToken', undefined);
    expect(userService.userAccessToken()).toBeUndefined();
    const authenticated = await runAuthGuardWithContext(getAuthGuardWithDummyUrl('admin'))
    expect(authenticated).toBeUndefined()
    expect(spy['Router'].navigate).toHaveBeenCalledWith(['/login']);
    // instance.userservice.userAccessToken();
    // expect(executeGuard).toBeTrue();
  }));

  it('#3__', fakeAsync(async () => {
    let userService: UserService = createSpyOnByReturn(UserService, 'userAccessToken', 'token');
    expect(userService.userAccessToken()).toBe('token');
    const authenticated = await runAuthGuardWithContext(getAuthGuardWithDummyUrl('admin'))
    expect(authenticated).toBeTrue()
    expect(spy['Router'].navigate).not.toHaveBeenCalled();
    // instance.userservice.userAccessToken();
    // expect(executeGuard).toBeTrue();
  }));

  function getAuthGuardWithDummyUrl(urlPath: string): () => boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    const dummyRoute = new ActivatedRouteSnapshot()
    dummyRoute.url = [new UrlSegment(urlPath, {})]
    const dummyState: RouterStateSnapshot = { url: urlPath, root: new ActivatedRouteSnapshot() }
    return () => authenticationGuard(dummyRoute, dummyState)
  }

  async function runAuthGuardWithContext(authenticationGuard: () => boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>): Promise<boolean | UrlTree> {
    const result = TestBed.runInInjectionContext(authenticationGuard)
   return result instanceof Observable ? await handleObservableResult(result) : result;
  }

  function handleObservableResult(result: Observable<boolean | UrlTree>): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve) => {
      result.subscribe((value) => {
        resolve(value);
      });
    });
  }

});
