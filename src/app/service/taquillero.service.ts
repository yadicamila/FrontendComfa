import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taquillero } from '../models/taquillero';

@Injectable({
  providedIn: 'root'
})
export class TaquilleroService {

  private loginUrl = 'http://localhost:8080/comfacauca-app/login';

  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string): Observable<Taquillero> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { usuario, contrasena };
    console.log("desde el service",body)
    return this.http.post<Taquillero>(this.loginUrl, body, { headers });
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout(){            
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

}
