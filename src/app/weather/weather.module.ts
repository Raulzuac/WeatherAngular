import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdvancedDetailsPageComponent } from './components/advanced-details-page/advanced-details-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainPageComponent,
    AdvancedDetailsPageComponent,
    SearchResultComponent,
    WeatherDetailsComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    MainPageComponent,
    AdvancedDetailsPageComponent
  ]
})
export class WeatherModule { }
