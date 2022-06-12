import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http:HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Vehicle';
  }

  saveVehicle(vehiculo: Vehicle): Observable<any>{
    console.log("servicio: ",vehiculo)
    console.log(`Enviando data: ${vehiculo} al endpoint ${this.myAppUrl+this.myApiUrl}`);
    return this.http.post(this.myAppUrl+this.myApiUrl,vehiculo);
  }

  getVehiclesId(id: number): Observable<any>{
    console.log("servicio getvehicles")
    return this.http.get(`${this.myAppUrl+this.myApiUrl+'/getVehiclesId'}?id=${id}`);
  }
}
