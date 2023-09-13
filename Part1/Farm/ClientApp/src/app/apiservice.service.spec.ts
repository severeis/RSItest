import { TestBed } from '@angular/core/testing';
import { providers } from "../providers";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiserviceService } from './apiservice.service';

describe('ApiserviceService', () => {
  let service: ApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ HttpClientTestingModule ], providers });
    service = TestBed.inject(ApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
