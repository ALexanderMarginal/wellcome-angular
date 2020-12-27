import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
  selectedDish: Dish = null;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(dish: Dish) {
    this.selectedDish = this.selectedDish.id === dish.id ? null : dish;
  }

}
