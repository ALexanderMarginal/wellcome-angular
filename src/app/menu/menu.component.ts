import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService} from '@/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish = null;

  constructor(private DishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.DishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = (this.selectedDish && this.selectedDish.id === dish.id) ? null : dish;
  }

}
