import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private urlBase = "http://localhost:8080/comfacauca-app/ventas";

  constructor(private clienteHttp: HttpClient) { }

  agregar(venta: Venta): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, venta);
  }

}
