import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './modules/landingPage/components/restaurant-card/restaurant-card.component';
import { RestaurantsDisplayComponent } from './modules/landingPage/components/restaurants-display/restaurants-display.component';
import { HotDealsComponent } from './modules/landingPage/components/hot-deals/hot-deals.component';
import { RestaurantDetailsComponent } from './modules/landingPage/components/restaurant-details/restaurant-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/landingPage/components/header/header.component';

import { NavigationBarComponent } from './modules/landingPage/components/header/navigation-bar/navigation-bar.component';
import { LocationPopupComponent } from './modules/landingPage/components/header/location-popup/location-popup.component';
import { CityComponent } from './modules/landingPage/components/header/location-popup/city/city.component';
import { CuisineComponent } from './modules/landingPage/components/header/location-popup/cuisine/cuisine.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    RestaurantsDisplayComponent,
    HotDealsComponent,
    RestaurantDetailsComponent,
    HeaderComponent,
    NavigationBarComponent,
    LocationPopupComponent,
    CityComponent,
    CuisineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
