import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from '@shared/spec/MockDependencies';

describe('UploadService', () => {
  let service: UploadService;
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
    service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
