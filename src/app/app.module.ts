import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './modules/landingPage/components/restaurant-card/restaurant-card.component';
import { RestaurantsDisplayComponent } from './modules/landingPage/components/restaurants-display/restaurants-display.component';
import { HotDealsComponent } from './modules/landingPage/components/hot-deals/hot-deals.component';
import { RestaurantDetailsComponent } from './modules/landingPage/components/restaurant-details/restaurant-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    RestaurantsDisplayComponent,
    HotDealsComponent,
    RestaurantDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
