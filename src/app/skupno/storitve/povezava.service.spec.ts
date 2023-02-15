import { TestBed } from '@angular/core/testing';

import { PovezavaService } from './povezava.service';

describe('PovezavaService', () => {
  let service: PovezavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PovezavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
