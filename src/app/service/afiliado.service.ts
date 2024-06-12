import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helpers';
import { Afiliado } from '../models/afiliado';


@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private urlBase = "http://localhost:8080/comfacauca-app/afiliados";

  constructor(private clienteHttp: HttpClient) { }

  obtenerAfiliados(): Observable<Afiliado[]>{
    return this.clienteHttp.get<Afiliado[]>(this.urlBase);
  }

  public getAfiliado(numerodocumento:string):Observable<any>{    
    return this.clienteHttp.get(`${baserUrl}/comfacauca-app/afiliados/${numerodocumento}`)       
  }

}
