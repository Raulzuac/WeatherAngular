import { Component, Input } from '@angular/core';
import {  Point } from '../../interfaces/point.interface';
import { Feature } from '../../interfaces/feature.interface';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  @Input()
  features?:Feature[]

  constructor(private weatherService:WeatherService){}

  setWeather(lat:string,long:string){
    this.weatherService.getWeather(lat,long)

  }

}
