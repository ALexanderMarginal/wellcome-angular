import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '@/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }
}
