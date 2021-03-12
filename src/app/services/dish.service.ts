import { Injectable } from '@angular/core';
import { Dish} from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.find(dish => dish.id === id);
  }

  getFeaturedDish(): Dish {
    return DISHES.find(dish => dish.featured);
  }
}
