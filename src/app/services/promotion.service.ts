import { Promotion } from '@/app/shared/promotion';
import { PROMOTIONS } from '@/app/shared/promotions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.find(promo => promo.id === id)).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.find(promotion => promotion.featured)).pipe(delay(2000));
  }
}
