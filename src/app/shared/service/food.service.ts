import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private _RECIPE_PUPPY_API = environment.RECIPE_PUPPY_API_PROXY;

  constructor( private http: HttpClient) { }

  getFood(){
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this._RECIPE_PUPPY_API}/?p=2`);
  }

} 
