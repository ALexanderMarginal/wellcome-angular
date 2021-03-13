import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Dish} from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.find(dish => dish.id === id)).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.find(dish => dish.featured)).pipe(delay(2000));
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map(({id}) => id));
  }
}
