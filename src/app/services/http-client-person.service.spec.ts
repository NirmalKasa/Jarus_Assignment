import { TestBed } from '@angular/core/testing';

import { HttpClientPersonService } from './http-client-person.service';

describe('HttpClientPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientPersonService = TestBed.get(HttpClientPersonService);
    expect(service).toBeTruthy();
  });
});
