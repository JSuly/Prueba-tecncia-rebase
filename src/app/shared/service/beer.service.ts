import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BeerService {


  constructor( private http: HttpClient) { 
  }

  getBeer(){
    return this.http.get('https://api.punkapi.com/v2/beers')
  }

  getBeerByID(id: any){
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`)
  }

}