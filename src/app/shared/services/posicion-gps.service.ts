import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class PosicionGPSService {

  private precision1: any;
  private latitud1: any;
  private longitud1: any;
  private altitud1: any;
  private precicionAlt1: any;
  private rumbo1: any;
  private velocidad1: any;

  constructor(private geolocation: Geolocation) { }

  public getCoordenadas() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude etc

      this.precision1 = resp.coords.accuracy;
      this.latitud1 = resp.coords.latitude;
      this.longitud1 = resp.coords.longitude;
      this.altitud1 = resp.coords.altitude;
      this.precicionAlt1 = resp.coords.altitudeAccuracy;
      this.rumbo1 = resp.coords.heading;
      this.velocidad1 = resp.coords.speed;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  public getPrecision() {
    return this.precision1;
  }
  public getLatitud() {
    return this.latitud1;
  }
  public getLongitud() {
    return this.longitud1;
  }
  public getAltitud() {
    return this.altitud1;
  }
  public getPrecisionAlt() {
    return this.precicionAlt1;
  }
  public getRumbo(){
    return this.rumbo1;
  }
  public getVelocidad(){
    return this.velocidad1;
  }
}
