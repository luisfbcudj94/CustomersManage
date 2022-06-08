import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string;
  myApiUrl: string;
  
  constructor(private http:HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
  }

  login(usuario: Usuario): Observable<any>{
    console.log(`La data enviada es ${usuario.nombreUsuario+" "+usuario.password} y se envia a: ${this.myAppUrl+this.myApiUrl}`);
    return this.http.post(this.myAppUrl+this.myApiUrl,usuario);
  }
}




