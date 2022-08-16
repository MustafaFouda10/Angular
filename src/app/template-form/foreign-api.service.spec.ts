import { TestBed } from '@angular/core/testing';

import { ForeignAPIService } from './foreign-api.service';

describe('ForeignAPIService', () => {
  let service: ForeignAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
