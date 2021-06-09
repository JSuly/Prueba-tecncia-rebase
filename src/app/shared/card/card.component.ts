import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() beer: any;

  foods: any;

  private getFood;

  constructor(private  foodService: FoodService) {
    this.getFood = foodService.getFood(); 
  }

  ngOnInit(): void {
    this.getFood.subscribe((data: any) => {
      this.foods = data.results;
    });
  }

}
  