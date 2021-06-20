import { TestBed } from '@angular/core/testing';

import { HttpClientOrganizationService } from './http-client-organization.service';

describe('HttpClientOrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientOrganizationService = TestBed.get(HttpClientOrganizationService);
    expect(service).toBeTruthy();
  });
});
