import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from "./api.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherData;
  message;
  base;
  country;
  city;
 

  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private apiService: ApiService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }


  getWeather(formValues) {
    this.apiService
      .getWeather(formValues.location)
      .subscribe(data => { this.weatherData = data;
      console.log(this.weatherData);
     
      this.message = this.weatherData.message;
      this.base = this.weatherData.body.base;
      this.country = this.weatherData.body.sys.country;
      this.city = this.weatherData.body.name;

       });
     
  }
}
