import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { WeatherProvider } from '../../providers/weather/weather'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

weatherForecast : any;

  constructor(public navCtrl: NavController, public geolocation : Geolocation, public weatherProvider: WeatherProvider) {
  }

  ionViewLoad(){
  	this.geolocation.getCurrentPosition().then((position) =>{
  		this.weatherProvider.getForecastWeather(position.coords.latitude, position.coords.longitude).subscribe(
  			data => {
  				this.weatherForecast = data.list
  				console.log(this.weatherForecast)
  			},
  			err => console.log("error is " + err),
  			() => console.log('read user completed '+ this.weatherForecast)
  			);
  	}, (err) => {
  		console.log(err);
  	});
  }
}

