import { DishService } from '@/app/services/dish.service';
import { LeaderService } from '@/app/services/leader.service';
import { PromotionService } from '@/app/services/promotion.service';
import { Dish } from '@/app/shared/dish';
import { Leader } from '@/app/shared/leader';
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
  leader: Leader;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
  ) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
