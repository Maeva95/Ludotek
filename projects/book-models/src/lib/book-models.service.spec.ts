import { TestBed } from '@angular/core/testing';

import { BookModelsService } from './book-models.service';

describe('BookModelsService', () => {
  let service: BookModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
