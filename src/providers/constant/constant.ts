import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConstantProvider {

forcastURL : string;
  constructor(public http: Http) {
    this.forcastURL = "http://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appId=8131be7e3e6b2014b3af931e011bd730"
  }
getForcastURL(lat,long){
	return this.getForcastURL;
}
}
