import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentroRecreativo } from '../../../models/centrorecreativo';
import { CentroRecreativoService } from 'src/app/service/centro-recreativo.service';

@Component({
  selector: 'app-centro-producto',
  templateUrl: './editar-centro.component.html'
})
export class EditarCentroComponent {
  centro: CentroRecreativo = new CentroRecreativo();
  id: number;

  constructor(private CentroRecreativoService: CentroRecreativoService,
    private ruta: ActivatedRoute,
    private enrutador: Router){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.CentroRecreativoService.obtenerPorId(this.id).subscribe(
      {
        next: (datos) => this.centro = datos
        ,
        error: (errores: any) => console.log(errores)
      }
    );
  }  

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.CentroRecreativoService.editar(this.id, this.centro).subscribe(
      {
        next: (datos) => this.irLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irLista(){
    this.enrutador.navigate(['/inicio']);
  }
}


