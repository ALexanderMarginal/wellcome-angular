import { DishService } from '@/app/services/dish.service';
import { PromotionService } from '@/app/services/promotion.service';
import { Dish } from '@/app/shared/dish';
import { DISHES } from '@/app/shared/dishes';
import { Promotion } from '@/app/shared/promotion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService, private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

}
