import { TestBed, inject } from '@angular/core/testing';

import { TwserviceService } from './twservice.service';

describe('TwserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwserviceService]
    });
  });

  it('should be created', inject([TwserviceService], (service: TwserviceService) => {
    expect(service).toBeTruthy();
  }));
});
