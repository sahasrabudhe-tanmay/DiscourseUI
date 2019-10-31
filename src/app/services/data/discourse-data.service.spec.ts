import { TestBed } from '@angular/core/testing';

import { DiscourseDataService } from './discourse-data.service';

describe('DiscourseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscourseDataService = TestBed.get(DiscourseDataService);
    expect(service).toBeTruthy();
  });
});
