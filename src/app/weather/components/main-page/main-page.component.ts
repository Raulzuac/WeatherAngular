import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private weatherService:WeatherService,private locationService:LocationService){}

  getLocations(){
    return this.locationService.getLocations;
  }

  getWeather(){
    return this.weatherService.getWeatherInfo;
  }

}
