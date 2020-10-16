import { TestBed } from '@angular/core/testing';

import { ApiReqService } from './api-req.service';

describe('ApiReqService', () => {
  let service: ApiReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
