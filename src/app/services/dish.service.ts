import { Injectable } from '@angular/core';
import { Dish} from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.find(dish => dish.id === id)), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.find(dish => dish.featured)), 2000);
    });
  }
}
