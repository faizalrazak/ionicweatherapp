import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantProvider } from '../constant/constant';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {

	private constantVar : any;
	weatherURL : string;

  constructor(public http: Http, constantVar : ConstantProvider){
    this.constantVar = constantVar;
  }

  getCurrentWeather(lat,long){
  	return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=8131be7e3e6b2014b3af931e011bd730")
  	.map(res => res.json())
  }

  getForecastWeather(lat,long){
  	return this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+long+"&appid=8131be7e3e6b2014b3af931e011bd730")
  	.map(res => res.json())
  }

}
