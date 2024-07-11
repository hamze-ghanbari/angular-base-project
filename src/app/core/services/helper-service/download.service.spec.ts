import { TestBed } from '@angular/core/testing';

import { DownloadService } from './download.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from '@shared/spec/MockDependencies';

describe('DownloadService', () => {
  let service: DownloadService;
  let httpClientSpy = httpClientMock();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide: HttpClient,
          useValue: httpClientSpy
        },
      ]
    });
    service = TestBed.inject(DownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
