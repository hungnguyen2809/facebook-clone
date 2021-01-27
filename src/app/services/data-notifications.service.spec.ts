import { TestBed } from '@angular/core/testing';

import { DataNotificationsService } from './data-notifications.service';

describe('DataNotificationsService', () => {
  let service: DataNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
