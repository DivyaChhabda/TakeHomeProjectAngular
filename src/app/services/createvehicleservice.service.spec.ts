import { TestBed } from '@angular/core/testing';

import { CreatevehicleserviceService } from './createvehicleservice.service';

describe('CreatevehicleserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatevehicleserviceService = TestBed.get(CreatevehicleserviceService);
    expect(service).toBeTruthy();
  });
});
