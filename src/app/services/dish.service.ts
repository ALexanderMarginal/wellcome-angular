import { Injectable } from '@angular/core';
import { Dish} from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.find(dish => dish.id === id));
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.find(dish => dish.featured));
  }
}
