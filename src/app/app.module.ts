import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { DishComponent } from './shared/dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BeerPageComponent,
    FoodPageComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
