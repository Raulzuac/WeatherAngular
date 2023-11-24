import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherKey } from '../../myInfo/myData';
import { Weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _url = 'https://api.openweathermap.org/data/2.5/weather?';
  private _weather?:Weather;



  constructor(private http:HttpClient) { }

  get getWeatherInfo(){
    return this._weather;
  }


  getWeather(lat:string,lon:string){
    this._weather=undefined;
    const requestParams = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('APPID',weatherKey)

    this.http.get<Weather>(this._url,{
      params:requestParams
    })
    .subscribe(data =>{

      this._weather= data
    })
  }
}
