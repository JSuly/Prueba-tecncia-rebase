import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/shared/service/food.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  
  @Input() food: any;

  constructor( ) { 
    
  }

  ngOnInit(): void {
    
  }

}
