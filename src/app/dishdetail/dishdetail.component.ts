import { DishService } from '@/app/services/dish.service';
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Dish } from 'src/app/shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe((dishIds: string[]) => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => {
      return this.dishService.getDish(params['id']);
    })).subscribe((dish: Dish) => {
      this.dish = dish;
      this.setPrevNext(dish.id);
    });
  }

  setPrevNext(id: string): void {
    const index: number = this.dishIds.indexOf(id);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
  }

  goBack(): void {
    this.location.back();
  }
}
