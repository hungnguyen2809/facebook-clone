import { TestBed } from '@angular/core/testing';

import { ProcessAllService } from './process-all.service';

describe('ProcessAllService', () => {
  let service: ProcessAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
