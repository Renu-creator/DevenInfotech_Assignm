import { TestBed } from '@angular/core/testing';

import { CommonServService } from './common-serv.service';

describe('CommonServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonServService = TestBed.get(CommonServService);
    expect(service).toBeTruthy();
  });
});
