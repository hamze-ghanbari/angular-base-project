import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { createSpyObject, makeDependecy } from '@shared/spec/MockDependencies';
import { LocalRepository } from '@core/utils/local-repository';

describe('UserService', () => {
  let service: UserService;
  let spy = createSpyObject({
    LocalRepository : { methods : ['setItem', 'getItem'] }
  })


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalRepository, useValue: spy.LocalRepository
        }
      ]
    });
    service = makeDependecy(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#2__', () => {
    expect(service.userAccessToken()).withContext('accessToken__2').toBeUndefined();
    expect(service.userRefreshToken()).withContext('refreshToken__2').toBeUndefined();
  });

  it('#3__', () => {
    service.addUserAccessToken('token');
    expect(spy.LocalRepository.setItem).toHaveBeenCalledWith('access_token', 'token');
     service.userAccessToken();
    expect(spy.LocalRepository.getItem).toHaveBeenCalledWith('access_token');

    service.addUserRefreshToken('token');
    expect(spy.LocalRepository.setItem).toHaveBeenCalledWith('refresh_token', 'token');
     service.userRefreshToken();
    expect(spy.LocalRepository.getItem).toHaveBeenCalledWith('refresh_token');
  });



});
