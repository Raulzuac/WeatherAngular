import { Component, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';
import { getCurrentDate,getCurrentHour } from '../../../utilities/dateUtilities';
import { kelvinToCelsius } from '../../../utilities/temperatureUtils';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent {

  @Input()
  weather?:Weather

  getFormatedDate(){
    return getCurrentDate()
  }

  getHour(){
    return getCurrentHour()
  }

  changeKelvin(num:number){
    return kelvinToCelsius(num);
  }
}
