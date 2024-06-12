import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado';
import { Beneficiario } from 'src/app/models/beneficiario';
import { DetalleVenta } from 'src/app/models/detalle_venta';
import { Servicio } from 'src/app/models/servicio';
import { Venta } from 'src/app/models/venta';
import { AfiliadoService } from 'src/app/service/afiliado.service';
import { DetalleVentaService } from 'src/app/service/detalle-venta.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { VentasService } from 'src/app/service/ventas.service';
import { BeneficiarioService } from 'src/app/service/beneficiarios.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-agregarventa',
  templateUrl: './agregarventa.component.html',
  styleUrls: ['./agregarventa.component.css']
})
export class AgregarventaComponent {
  afiliado: Afiliado[];
  beneficiarios: Beneficiario[];
  listadoserviciosActuales: Servicio[];
  listadoservicios: Servicio[];
  listadoservicio: Servicio[];
  venta: Venta;
  detalleventa: DetalleVenta;
  public filterServicios = "";
  public filterAfiliados = "";



  constructor(private AfiliadoService: AfiliadoService,
    private VentaService:VentasService,
    private BeneficiarioService:BeneficiarioService,
    private DetalleVenta:DetalleVentaService,
    private ServicioService:ServicioService,
    private enrutador: Router){}
  
  ngOnInit(){

    //this.obtenerAfiliados();
    this.busquedaServicios();

  }

  onSubmit(){
    this.guardar();
  }

  guardar(){
    this.DetalleVenta.agregar(this.detalleventa).subscribe(
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

  // private obtenerAfiliados(){
  //   // Consumir los datos del observable (suscribirnos)
  //   this.AfiliadoService.obtenerAfiliados().subscribe(
  //     (datos => {
  //       console.log(datos)
  //       this.afiliados = datos;
  //     })
  //   );
  // }

  public obtenerAfiliado(numerodocumento:string){
    // Consumir los datos del observable (suscribirnos)
    this.AfiliadoService.getAfiliado(numerodocumento).subscribe(
      (datos => {
        this.afiliado = datos;
        //obtener beneficiarios
        for (let index = 0; index < this.afiliado.length; index++) {
          this.BeneficiarioService.getBeneficiarios(datos[index].idAfiliado).subscribe(
            (datosB => {              
              this.beneficiarios = datosB;              
            }))         
        }
      })
    );
  }

  busquedaServicio(busque:String)
  {
    this.ServicioService.getServicio(busque).subscribe(
      data => {
        this.listadoservicio = data;
      }, error => {
        console.log(error);
      })
  }

  busquedaServicios()
  {
    this.ServicioService.obtenerServicios().subscribe(
      data => {
        this.listadoservicios = data;
      }, error => {
        console.log(error);
      })
  }


  agregarServicio(servicio:any){
    this.listadoserviciosActuales.push(servicio);
  }

  eliminardiagnosticosHistoria(id:any){
    const index =  this.listadoserviciosActuales.findIndex((servicio)=>{
      return servicio.id_servicio==id
    })    
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡Eliminara el diagnostico!",
      icon: 'warning',
      confirmButtonColor: '#3d9970',
      showConfirmButton: true,
      showCancelButton: true,
      denyButtonText: `Don't save`,
      confirmButtonText: 'Ok',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.listadoserviciosActuales.splice(index,1)    
      }        
    })
  }

}
