import { TestBed } from '@angular/core/testing';

import { DataWatchService } from './data-watch.service';

describe('DataWatchService', () => {
  let service: DataWatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataWatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
