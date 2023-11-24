import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locationKey } from '../../myInfo/myData';
import { Point } from '../interfaces/point.interface';
import { Feature } from '../interfaces/feature.interface';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _url:string  = 'https://api.maptiler.com/geocoding/';
  private _locations:Feature[] = [];

  constructor(private http:HttpClient) { }

  get getLocations(){
    return [...this._locations];
  }


  getLocation(location:string){

    this._locations=[];
    this.http.get<Point>(this._url+location+'.json?key='+locationKey)
    .subscribe(data=>{
      this._locations = data.features;
    })
  }
}
