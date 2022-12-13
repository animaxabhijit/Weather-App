import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {WeatherData} from "./Models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) {
  }

  cityName: string = 'Pune';
  weatherData?: WeatherData;

  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe((response) => {
        this.weatherData = response;
      }, (error) => {
        console.log(error)
      })
  }
}
