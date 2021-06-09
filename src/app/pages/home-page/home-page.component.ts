import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/service/beer.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  beers: any;
  

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getBeer().subscribe((data: any) => {
      this.beers = data;
    });
   
  }

}
