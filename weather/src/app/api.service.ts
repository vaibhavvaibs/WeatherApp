import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


    getWeather(location){
 var APIkey =	'7aee39e846cff4989cd824384fb832d7';
     
      return this.http.get(
      'http://localhost:3000/weather/' + location
      );
  }
}
