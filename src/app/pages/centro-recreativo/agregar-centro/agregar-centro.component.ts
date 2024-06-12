import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CentroRecreativo } from '../../../models/centrorecreativo';
import { CentroRecreativoService } from 'src/app/service/centro-recreativo.service';

@Component({
  selector: 'app-agregar-centro',
  templateUrl: './agregar-centro.component.html',
  styleUrls: ['./agregar-centro.component.css']
})
export class AgregarCentroComponent {
  centro: CentroRecreativo = new CentroRecreativo();

  constructor(private CentroRecreativoService: CentroRecreativoService,
    private enrutador: Router){}

  onSubmit(){
    this.guardar();
  }

  guardar(){
    this.CentroRecreativoService.agregar(this.centro).subscribe(
      {
        next: (datos) => {
          this.irLista();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }

  irLista(){
    this.enrutador.navigate(['/inicio']);
  }
}
