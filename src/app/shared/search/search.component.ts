import { Component } from '@angular/core';
import { LocationService } from '../../weather/services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private locationService:LocationService){}

  searchPlaces(param:string){

    this.locationService.getLocation(param);
  }

}
