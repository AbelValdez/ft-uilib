import { TestBed } from '@angular/core/testing';

import { FtLibService } from './ft-lib.service';

describe('FtLibService', () => {
  let service: FtLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
