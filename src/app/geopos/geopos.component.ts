import { PosicionGPSService } from './../shared/services/posicion-gps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geopos',
  templateUrl: './geopos.component.html',
  styleUrls: ['./geopos.component.scss'],
})
export class GeoposComponent implements OnInit {

  miPrecision1: any;
  miLatitud1: any;
  miLongitud1: any;
  miAltitud1: any;
  miPrecicionAlt1: any;
  miRumbo1: any;
  miVelocidad1: any;


  constructor(private posicionGPSService: PosicionGPSService) { }

  ngOnInit() {
    this.lanzarGpsIntervalo();
  }

  lanzarGpsIntervalo() {
    setInterval( () => {
      this.posicionGPSService.getCoordenadas();

      this.miPrecision1 = this.posicionGPSService.getPrecision();
      this.miLatitud1 = this.posicionGPSService.getLatitud();
      this.miLongitud1 = this.posicionGPSService.getLongitud();
      this.miAltitud1 = this.posicionGPSService.getAltitud();
      this.miPrecicionAlt1 = this.posicionGPSService.getPrecisionAlt();
      this.miRumbo1 = this.posicionGPSService.getRumbo();
      this.miVelocidad1 = this.posicionGPSService.getVelocidad();

    }, 10000);//cada 10 segundos refresca datos GPS

  }
}
