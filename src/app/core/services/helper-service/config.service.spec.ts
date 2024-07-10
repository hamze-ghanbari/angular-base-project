import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { APP_CONFIG } from '@core/constants/config';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#2__', () => {
     expect(service.config).toEqual(APP_CONFIG);
  });

//   it('#3__g', () => {
//     // expect(service.config).toBe('');
//  });
});
