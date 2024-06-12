import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroListaComponent } from './pages/centro-recreativo/listar-centro/centro-lista.component';
import { AgregarCentroComponent } from './pages/centro-recreativo/agregar-centro/agregar-centro.component';
import { FormsModule } from '@angular/forms';
import { EditarCentroComponent } from './pages/centro-recreativo/editar-centro/editar-centro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarventaComponent } from './pages/venta/agregarventa/agregarventa.component';
import { VerventaComponent } from './pages/venta/verventas/verventa/verventa.component';
import { MatCardModule} from '@angular/material/card';
import { Servicio } from './models/servicio';
import { Afiliado } from './models/afiliado';
import { SesionComponent } from './pages/sesion/sesion.component';
import { Taquillero } from './models/taquillero';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    CentroListaComponent,
    AgregarCentroComponent,
    EditarCentroComponent,
    NavbarComponent,
    FooterComponent,
    AgregarventaComponent,
    VerventaComponent,
    SesionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [Servicio,Afiliado,Taquillero],
  bootstrap: [AppComponent]
})
export class AppModule { }
