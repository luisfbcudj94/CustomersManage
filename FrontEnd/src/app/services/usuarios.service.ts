import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioAdd } from '../models/usuarioAdd';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Usuario';
   }


  newCustomer(usuario: UsuarioAdd): Observable<any>{
    console.log(`Enviando data: ${usuario} al endpoint ${this.myAppUrl+this.myApiUrl}`);
    return this.http.post(this.myAppUrl+this.myApiUrl,usuario);
  }

  getCustomers(tallerId: number): Observable<any>{
    console.log("servicio tallerId: ",tallerId);
    return this.http.get(`${this.myAppUrl+this.myApiUrl}?tallerId=${tallerId}`);
  }

}

