import { TestBed } from '@angular/core/testing';

import { PromotionService } from 'src/app/services/promotion.service';

describe('PromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionService = TestBed.get(PromotionService);
    expect(service).toBeTruthy();
  });
});
