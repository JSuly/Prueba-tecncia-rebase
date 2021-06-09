import { BeerService } from 'src/app/shared/service/beer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.scss']
})
export class BeerPageComponent implements OnInit {

  findBeer: any;
  beer: any;

  constructor(private beerService: BeerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.findBeer = params.get('idBeer');

      this.beerService.getBeerByID(this.findBeer).subscribe((data: any) => {
        console.log(data)
        this.beer = data;
      })
    });

  }

  }
