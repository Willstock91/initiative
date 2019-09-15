import { TestBed } from '@angular/core/testing';

import { PcStatService } from './pc-stat.service';

describe('PcStatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PcStatService = TestBed.get(PcStatService);
    expect(service).toBeTruthy();
  });
});
