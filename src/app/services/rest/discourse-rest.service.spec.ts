import { TestBed } from '@angular/core/testing';

import { DiscourseRestService } from './discourse-rest.service';

describe('DiscourseRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscourseRestService = TestBed.get(DiscourseRestService);
    expect(service).toBeTruthy();
  });
});
