import { TestBed } from '@angular/core/testing';

import { IDProfileService } from './id-profile.service';

describe('DataProfileService', () => {
  let service: IDProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IDProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
