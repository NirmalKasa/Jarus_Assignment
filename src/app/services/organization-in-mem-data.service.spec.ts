import { TestBed } from '@angular/core/testing';

import { OrganizationInMemDataService } from './organization-in-mem-data.service';

describe('OrganizationInMemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationInMemDataService = TestBed.get(OrganizationInMemDataService);
    expect(service).toBeTruthy();
  });
});
