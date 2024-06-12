import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helpers';
import { Servicio } from '../models/servicio';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlBase = "http://localhost:8080/comfacauca-app/servicios";

  constructor(private clienteHttp: HttpClient) { }

  obtenerServicios(): Observable<Servicio[]>{
    return this.clienteHttp.get<Servicio[]>(this.urlBase);
  }

  public getServicio(descripcion:any):Observable<any>{    
    return this.clienteHttp.get(`${baserUrl}/comfacauca-app/servicios/${descripcion}`)       
  }

}