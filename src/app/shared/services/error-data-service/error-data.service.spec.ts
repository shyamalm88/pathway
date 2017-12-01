import { TestBed, inject } from '@angular/core/testing';

import { ErrorDataService } from './error-data.service';

describe('ErrorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorDataService]
    });
  });

  it('should be created', inject([ErrorDataService], (service: ErrorDataService) => {
    expect(service).toBeTruthy();
  }));
});
