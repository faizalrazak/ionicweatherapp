import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	weatherList : any;
	weatherProvider : any;
	location : string;

  constructor(public navCtrl: NavController, weatherProvider: WeatherProvider, public geolocation : Geolocation){

  	this.weatherProvider = weatherProvider;
  }

  weatherTapped(location){
  	this.geolocation.getCurrentPosition().then((position) => {
  		this.weatherProvider.getCurrentWeather(position.coords.latitude, position.coords.longitude).subscribe(
  			data => {
  				this.weatherList = data
  				console.log(this.weatherList)
  				this.location = data.name
  			},
  			err => console.log("error is "+ err),
  			() => console.log('read user Completed' + this.weatherList)
  			);
  	},(err) => {
  		console.log(err);
  	});
  }
}
