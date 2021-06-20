import { TestBed } from '@angular/core/testing';

import { PersonInMemDataService } from './person-in-mem-data.service';

describe('PersonInMemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonInMemDataService = TestBed.get(PersonInMemDataService);
    expect(service).toBeTruthy();
  });
});
