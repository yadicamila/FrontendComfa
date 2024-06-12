import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentroRecreativo } from '../models/centrorecreativo';


@Injectable({
  providedIn: 'root'
})
export class CentroRecreativoService {

  private urlBase = "http://localhost:8080/comfacauca-app/centros";

  constructor(private clienteHttp: HttpClient) { }

  obtenerCentrosLista(): Observable<CentroRecreativo[]>{
    return this.clienteHttp.get<CentroRecreativo[]>(this.urlBase);
  }

  agregar(centro: CentroRecreativo): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, centro);
  }

  obtenerPorId(id: number){
    return this.clienteHttp.get<CentroRecreativo>(`${this.urlBase}/${id}`);
  }

  editar(id: number, centro: CentroRecreativo): Observable<Object>{
    return this.
    clienteHttp.put(`${this.urlBase}/${id}`, centro);
  }

  eliminar(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
