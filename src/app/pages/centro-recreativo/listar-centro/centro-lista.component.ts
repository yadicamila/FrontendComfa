import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CentroRecreativo } from '../../../models/centrorecreativo';
import { CentroRecreativoService } from 'src/app/service/centro-recreativo.service';

@Component({
  selector: 'app-centro-lista',
  templateUrl: './centro-lista.component.html'
})
export class CentroListaComponent {
  centros: CentroRecreativo[];

  constructor(private CentroRecreativoService: CentroRecreativoService,
    private enrutador: Router){}
  
  ngOnInit(){
    //Cargamos los productos
    this.obtener();
  }

  private obtener(){
    // Consumir los datos del observable (suscribirnos)
    this.CentroRecreativoService.obtenerCentrosLista().subscribe(
      (datos => {
        console.log(datos)
        this.centros = datos;
      })
    );
  }

  editar(id: number){
    this.enrutador.navigate(['editar-centro', id]);
  }

  eliminar(id: number){
    this.CentroRecreativoService.eliminar(id).subscribe(
      {
        next: (datos) => this.obtener(),
        error: (errores) => console.log(errores)
      }
    );
  }
}
