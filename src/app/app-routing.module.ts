import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCentroComponent } from './pages/centro-recreativo/agregar-centro/agregar-centro.component';
import { EditarCentroComponent } from './pages/centro-recreativo/editar-centro/editar-centro.component';
import { CentroListaComponent } from './pages/centro-recreativo/listar-centro/centro-lista.component';
import { AgregarventaComponent } from './pages/venta/agregarventa/agregarventa.component';
import { VerventaComponent } from './pages/venta/verventas/verventa/verventa.component';
import { SesionComponent } from './pages/sesion/sesion.component';

// http:localhost:4200/productos
const routes: Routes = [
  {path:'sesion', component: SesionComponent},
  {path:'', redirectTo: 'sesion', pathMatch:'full'},
  {path:'agregar-centro', component: AgregarCentroComponent},
  {path: 'editar-centro/:id', component: EditarCentroComponent},
  {path:'agregar-venta', component: AgregarventaComponent},
  {path:'ver-venta', component: VerventaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
