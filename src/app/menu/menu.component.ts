import { Component, OnInit } from '@angular/core';
import { Dish, DISHES } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;

  constructor() {
  }

  ngOnInit() {
  }

}
