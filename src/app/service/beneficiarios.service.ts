import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helpers';
import { Beneficiario } from '../models/beneficiario';


@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  private urlBase = "http://localhost:8080/comfacauca-app/beneficiarios";

  constructor(private clienteHttp: HttpClient) { }

  obtenerAfiliados(): Observable<Beneficiario[]>{
    return this.clienteHttp.get<Beneficiario[]>(this.urlBase);
  }

  public getBeneficiarios(idafiliado:number):Observable<any>{    
    return this.clienteHttp.get(`${baserUrl}/comfacauca-app/beneficiarios/${idafiliado}`)       
  }

}
