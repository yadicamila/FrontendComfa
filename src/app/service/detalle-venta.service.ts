import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';
import { DetalleVenta } from '../models/detalle_venta';


@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  private urlBase = "http://localhost:8080/comfacauca-app/detalleventa";

  constructor(private clienteHttp: HttpClient) { }

  agregar(detalleventa: DetalleVenta): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, detalleventa);
  }

}
