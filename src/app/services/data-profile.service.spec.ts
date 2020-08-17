import { TestBed } from '@angular/core/testing';

import { DataProfileService } from './data-profile.service';

describe('DataProfileService', () => {
  let service: DataProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
