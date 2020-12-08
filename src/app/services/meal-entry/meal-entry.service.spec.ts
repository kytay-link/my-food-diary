import { TestBed } from '@angular/core/testing';

import { MealEntryService } from './meal-entry.service';

describe('MealEntryService', () => {
  let service: MealEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
